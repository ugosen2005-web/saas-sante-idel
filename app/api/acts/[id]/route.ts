import { NextResponse } from "next/server";
import { acts } from "../../../../lib/db";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { date, type, amount } = body;
  const act = acts.find((item) => item.id === params.id);

  if (!act) {
    return NextResponse.json({ error: "Acte introuvable." }, { status: 404 });
  }

  act.date = date ?? act.date;
  act.type = type ?? act.type;
  act.amount = amount ?? act.amount;

  return NextResponse.json({ data: act });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const index = acts.findIndex((item) => item.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Acte introuvable." }, { status: 404 });
  }

  const [removed] = acts.splice(index, 1);
  return NextResponse.json({ data: removed });
}
