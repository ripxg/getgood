import { NextRequest, NextResponse } from 'next/server';

// ── Input validation (defence-in-depth, mirrors backend) ──────────────────────

const PROMPT_INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /ignore\s+(all\s+)?prior\s+instructions/i,
  /you\s+are\s+(now|a\s)/i,
  /system\s*:/i,
  /assistant\s*:/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /###\s*(system|human|assistant|user)/i,
  /pretend\s+you\s+are/i,
  /act\s+as\s+(if\s+)?you\s+are/i,
  /forget\s+(everything|all|your)/i,
  /new\s+instructions?\s*:/i,
  /override\s+(previous|default|safety)/i,
  /disregard/i,
  /\b(jailbreak|dan\s+mode|developer\s+mode)\b/i,
];

function validateQuery(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  let q = raw.normalize('NFKC');
  q = q.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ');
  q = q.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  q = q.replace(/[<>"`;{}\\]/g, '');
  q = q.trim();
  if (q.length < 3 || q.length > 120) return null;
  if (PROMPT_INJECTION_PATTERNS.some((p) => p.test(q))) return null;
  if (!/^[a-zA-Z0-9\s\-',.&()?!+]+$/.test(q)) return null;
  return q;
}

function validateEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const email = raw.trim().toLowerCase();
  if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)) return null;
  if (email.length > 254) return null;
  return email;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const query = validateQuery(body?.query);
  const email = validateEmail(body?.email);

  if (!query) {
    return NextResponse.json({ error: 'Invalid or missing query (3–120 characters).' }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ error: 'Invalid or missing email address.' }, { status: 400 });
  }

  const apiUrl = process.env.GETGOOD_API_URL;

  if (!apiUrl) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const res = await fetch(`${apiUrl}/api/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, email }),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
