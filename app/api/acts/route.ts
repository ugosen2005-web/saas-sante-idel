import { NextResponse } from "next/server";
import { acts } from "../../../lib/db";

export async function GET() {
  return NextResponse.json({ data: acts });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, date, type, amount } = body;

  if (!userId || !date || !type || typeof amount !== "number") {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const act = {
    id: crypto.randomUUID(),
    userId,
    date,
    type,
    amount
  };

  acts.push(act);

  return NextResponse.json({ data: act }, { status: 201 });
}
