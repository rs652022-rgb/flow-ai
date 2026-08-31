import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  emailVerified?: string;
  createdAt: string;
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }
}

function readUsers(): UserRecord[] {
  ensureDataDir();
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeUsers(users: UserRecord[]) {
  ensureDataDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}): Promise<UserRecord> {
  const users = readUsers();

  const existing = users.find(
    (u) => u.email.toLowerCase() === data.email.toLowerCase()
  );
  if (existing) {
    throw new Error("An account with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);
  const user: UserRecord = {
    id: "usr_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name: data.name,
    email: data.email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  writeUsers(users);
  return { ...user, password: undefined };
}

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  const users = readUsers();
  return (
    users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null
  );
}

export async function getUserById(id: string): Promise<UserRecord | null> {
  const users = readUsers();
  return users.find((u) => u.id === id) || null;
}

export async function verifyPassword(
  email: string,
  password: string
): Promise<UserRecord | null> {
  const user = await getUserByEmail(email);
  if (!user || !user.password) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}
