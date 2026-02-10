import { NextResponse } from "next/server";
import { charges } from "../../../lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId requis." }, { status: 400 });
  }

  const setting = charges.find((item) => item.userId === userId);
  return NextResponse.json({ data: setting ?? { userId, percentage: 0 } });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { userId, percentage } = body;

  if (!userId || typeof percentage !== "number") {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const setting = charges.find((item) => item.userId === userId);

  if (setting) {
    setting.percentage = percentage;
  } else {
    charges.push({ userId, percentage });
  }

  return NextResponse.json({ data: { userId, percentage } });
}
