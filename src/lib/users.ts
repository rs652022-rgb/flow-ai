import bcrypt from "bcryptjs";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  emailVerified?: string;
  createdAt: string;
}

// In-memory user store — works on Vercel (no filesystem writes)
// Data persists across requests within the same serverless instance
const users: UserRecord[] = [];

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}): Promise<UserRecord> {
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
  return { ...user, password: undefined };
}

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  return (
    users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null
  );
}

export async function getUserById(id: string): Promise<UserRecord | null> {
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
