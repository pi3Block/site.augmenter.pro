import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Audit IA Gratuit 60 min | Yvelines & Val d'Oise",
  description:
    "Demandez votre audit gratuit de 60 min. Consultant IA & transformation digitale pour PME en Yvelines (78) et Val d'Oise (95). Réponse sous 24h.",
};

export default function ContactPage() {
  return <ContactForm />;
}
