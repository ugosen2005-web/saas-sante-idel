import { NextResponse } from "next/server";
import { hashPassword, findUserByEmail } from "../../../../lib/auth";
import { users } from "../../../../lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "Email déjà utilisé." }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash
  };

  users.push(user);

  return NextResponse.json({ id: user.id, email: user.email });
}
