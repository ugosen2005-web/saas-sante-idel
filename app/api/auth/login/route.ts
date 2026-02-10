import { NextResponse } from "next/server";
import { findUserByEmail, verifyPassword } from "../../../../lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const user = findUserByEmail(email);

  if (!user) {
    return NextResponse.json({ error: "Identifiants invalides." }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.passwordHash);

  if (!valid) {
    return NextResponse.json({ error: "Identifiants invalides." }, { status: 401 });
  }

  return NextResponse.json({ id: user.id, email: user.email });
}
