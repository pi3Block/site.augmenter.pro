import { NextRequest, NextResponse } from "next/server";

interface AbandonPayload {
  email: string;
  services: string[];
  step: number;
  consentGiven: boolean;
  sector?: string;
  teamSize?: string;
  urgency?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "audit-180": "Audit 180°",
  "audit-360": "Audit 360° IA",
  "dev": "Développement sur mesure",
  "formation": "Formation & Accompagnement",
  "conseil": "Conseil Stratégique",
};

export async function POST(req: NextRequest) {
  let payload: AbandonPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!payload.email || !payload.consentGiven) {
    return NextResponse.json({ ok: false, reason: "no consent" }, { status: 400 });
  }

  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  if (!webhookUrl) {
    // Not configured — graceful no-op
    return NextResponse.json({ ok: true });
  }

  const serviceNames =
    payload.services.length > 0
      ? payload.services.map((s) => SERVICE_LABELS[s] ?? s).join(", ")
      : "Aucun service sélectionné";

  const stepLabel = ["—", "Sélection services", "Contexte", "Brief & Contact"][payload.step] ?? `Étape ${payload.step}`;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "quote_abandon",
        source: "augmenter.pro/contact",
        timestamp: new Date().toISOString(),
        email: payload.email,
        services: serviceNames,
        abandonedAt: stepLabel,
        sector: payload.sector ?? "Non renseigné",
        teamSize: payload.teamSize ?? "Non renseigné",
        urgency: payload.urgency ?? "Non renseigné",
      }),
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    // Webhook failure is non-blocking
  }

  return NextResponse.json({ ok: true });
}
