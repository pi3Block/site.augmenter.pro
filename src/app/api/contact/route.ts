import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    // TODO: Remplacer par un service d'envoi d'email (Resend, Nodemailer, etc.)
    // Pour l'instant, log côté serveur
    console.log("--- Nouveau message de contact ---");
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Entreprise: ${company || "Non renseignée"}`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors du traitement du message." },
      { status: 500 }
    );
  }
}
