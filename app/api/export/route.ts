import { NextResponse } from "next/server";
import { acts } from "../../../lib/db";

function toCsv(rows: Array<{ date: string; type: string; amount: number }>) {
  const header = "date,type,amount";
  const body = rows.map((row) => `${row.date},${row.type},${row.amount}`).join("\n");
  return `${header}\n${body}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  if (format === "csv") {
    const csv = toCsv(acts);
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=export.csv"
      }
    });
  }

  if (format === "pdf") {
    return NextResponse.json({ message: "Export PDF à implémenter." }, { status: 501 });
  }

  return NextResponse.json({ error: "Format non supporté." }, { status: 400 });
}
