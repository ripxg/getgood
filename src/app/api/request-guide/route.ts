import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiUrl = process.env.GETGOOD_API_URL;

  if (!apiUrl) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const res = await fetch(`${apiUrl}/api/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
