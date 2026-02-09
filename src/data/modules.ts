import {
  UserCheck,
  LayoutDashboard,
  Newspaper,
  Users,
  Mail,
  Share2,
  Mic,
  Send,
  FileText,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Module {
  id: string;
  letter: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  howItWorks: string[];
  techs: { name: string; description: string }[];
  keywords: string[];
  relatedSlugs: string[];
}

export const modules: Module[] = [
  {
    id: "module-a",
    letter: "A",
    slug: "onboarding-ia",
    title: "Onboarding & Digital Persona",
    shortTitle: "Onboarding",
    description:
      "Audit intelligent qui génère votre « Digital Persona » et crée automatiquement votre dashboard personnalisé.",
    longDescription:
      "Répondez à 15-20 questions adaptatives sur votre profil, vos objectifs et vos outils actuels. Notre IA génère votre « Digital Persona » — un profil numérique complet (rôle, secteur, taille d'entreprise, objectifs, points de friction) — puis configure automatiquement votre dashboard avec les widgets les plus pertinents pour vous.",
    icon: UserCheck,
    features: [
      "Audit adaptatif en 15-20 questions intelligentes",
      "Génération automatique de votre Digital Persona par LLM",
      "Dashboard pré-configuré selon votre profil et vos besoins",
      "Recommandations personnalisées de modules à activer",
    ],
    howItWorks: [
      "Répondez aux questions de l'audit intelligent",
      "L'IA analyse vos réponses et génère votre Digital Persona",
      "Votre dashboard est automatiquement configuré avec les bons widgets",
    ],
    techs: [
      { name: "Better Auth", description: "Authentification moderne avec SSO" },
      { name: "Prisma", description: "ORM TypeScript pour la persistance" },
    ],
    keywords: [
      "audit digital IA",
      "diagnostic numérique entreprise",
      "onboarding IA professionnel",
    ],
    relatedSlugs: ["dashboard-intelligent", "curation-ia"],
  },
  {
    id: "module-b",
    letter: "B",
    slug: "dashboard-intelligent",
    title: "Dashboard & Widgets Intelligents",
    shortTitle: "Dashboard",
    description:
      "Bento Grid avec widgets intelligents : Notes, Media, Smart Cards, Actions, Voice Notes — le tout personnalisable par drag & drop.",
    longDescription:
      "Votre espace de travail centralisé, organisé en Bento Grid responsive. 8 types de widgets (Notes, Media, Smart Card, Action, News, Social Post, Voice Note, Meeting Summary) que vous arrangez par glisser-déposer. Collaboration en temps réel grâce aux CRDT — vos modifications sont synchronisées même hors connexion.",
    icon: LayoutDashboard,
    features: [
      "Bento Grid responsive (12 → 8 → 4 → 1 colonnes)",
      "8 types de widgets spécialisés",
      "Drag & drop accessible avec dnd-kit",
      "Collaboration temps réel et offline-first avec Yjs",
    ],
    howItWorks: [
      "Votre dashboard est pré-configuré après l'onboarding",
      "Ajoutez, déplacez et redimensionnez vos widgets librement",
      "Collaborez en temps réel avec votre équipe",
    ],
    techs: [
      { name: "dnd-kit", description: "Drag & drop accessible (10kb)" },
      { name: "Yjs", description: "CRDT pour édition offline-first" },
    ],
    keywords: [
      "dashboard IA professionnel",
      "tableau de bord intelligent",
      "espace de travail IA",
    ],
    relatedSlugs: ["onboarding-ia", "curation-ia", "transcription-vocale"],
  },
  {
    id: "module-c",
    letter: "C",
    slug: "curation-ia",
    title: "Curation IA & Veille Automatique",
    shortTitle: "Curation IA",
    description:
      "Filtrage intelligent des actualités : scraping toutes les 4h, scoring LLM 1-100, affichage uniquement des articles pertinents (>80).",
    longDescription:
      "Fini le bruit informationnel. Notre module collecte les actualités depuis plus de 100 sources (RSS, APIs, web scraping) toutes les 4 heures. Chaque article est évalué par un LLM qui attribue un score de pertinence de 1 à 100 basé sur votre Digital Persona. Seuls les articles scorant au-dessus de 80 apparaissent dans votre feed — du contenu ultra-pertinent, zéro bruit.",
    icon: Newspaper,
    features: [
      "Collecte automatique depuis 100+ sources toutes les 4h",
      "Scoring LLM personnalisé (1-100) selon votre profil",
      "Affichage uniquement des articles >80 — zéro bruit",
      "Sauvegarde en un clic vers votre dashboard",
    ],
    howItWorks: [
      "Configurez vos sources et centres d'intérêt",
      "L'IA collecte et score chaque article automatiquement",
      "Consultez uniquement les contenus ultra-pertinents (score >80)",
    ],
    techs: [
      { name: "LangChain", description: "Framework agents IA" },
      { name: "Firecrawl", description: "Web scraping intelligent" },
    ],
    keywords: [
      "veille automatique IA",
      "curation contenu IA",
      "filtrage news IA",
      "veille informationnelle automatisée",
    ],
    relatedSlugs: ["veille-concurrentielle", "dashboard-intelligent"],
  },
  {
    id: "module-d",
    letter: "D",
    slug: "reseau-professionnel",
    title: "Network & Gamification",
    shortTitle: "Network",
    description:
      "Recommandations de pairs par IA, système de points « Augmenter Points » et Cercles privés pour collaborer.",
    longDescription:
      "Développez votre réseau professionnel intelligemment. L'IA vous recommande des pairs complémentaires selon vos compétences et objectifs. Gagnez des « Augmenter Points » en partageant, collaborant et en aidant la communauté. Rejoignez des Cercles privés thématiques pour des échanges ciblés entre professionnels de votre secteur.",
    icon: Users,
    features: [
      "Recommandations de pairs par IA selon votre profil",
      "Gamification avec « Augmenter Points »",
      "Cercles privés thématiques",
      "Mise en relation intelligente entre professionnels",
    ],
    howItWorks: [
      "L'IA analyse votre profil et recommande des connexions pertinentes",
      "Interagissez et gagnez des points en contribuant",
      "Rejoignez ou créez des Cercles pour collaborer",
    ],
    techs: [
      { name: "Oasis", description: "Plateforme communautaire" },
      { name: "PostgreSQL", description: "Base relationnelle robuste" },
    ],
    keywords: [
      "réseau professionnel IA",
      "networking gamifié",
      "communauté professionnelle IA",
    ],
    relatedSlugs: ["onboarding-ia", "publication-sociale"],
  },
  {
    id: "module-e",
    letter: "E",
    slug: "email-intelligent",
    title: "Email Intelligent",
    shortTitle: "Email",
    description:
      "Synchronisation OAuth (Gmail, Outlook, IMAP) avec commandes intelligentes et ingestion automatique.",
    longDescription:
      "Connectez vos boîtes mail (Gmail, Outlook ou tout fournisseur IMAP) et laissez l'IA trier, catégoriser et extraire les actions de vos emails. Envoyez un email à save@augmenter.pro pour créer automatiquement un widget sur votre dashboard. Commandes intelligentes pour analyser, résumer ou transformer vos messages.",
    icon: Mail,
    features: [
      "Synchronisation OAuth avec Gmail & Outlook",
      "Support IMAP universel",
      "Ingestion automatique via save@augmenter.pro",
      "Commandes IA : analyse, résumé, extraction de contacts",
    ],
    howItWorks: [
      "Connectez vos comptes email en un clic (OAuth)",
      "L'IA catégorise et extrait les actions automatiquement",
      "Transférez un email à save@augmenter.pro → widget créé",
    ],
    techs: [
      { name: "Gmail API", description: "Intégration OAuth Gmail" },
      { name: "Nango", description: "Orchestrateur OAuth universel" },
    ],
    keywords: [
      "gestion email IA",
      "email automatisation PME",
      "tri email intelligent",
      "inbox zero IA",
    ],
    relatedSlugs: ["bot-telegram", "dashboard-intelligent"],
  },
  {
    id: "module-f",
    letter: "F",
    slug: "publication-sociale",
    title: "Publication Sociale Multi-Canal",
    shortTitle: "Social",
    description:
      "Publiez sur tous vos réseaux sociaux depuis un seul endroit. L'IA adapte automatiquement le contenu à chaque plateforme.",
    longDescription:
      "Rédigez un seul post, publiez partout. Notre IA adapte automatiquement le ton, le format et les hashtags pour chaque réseau social (LinkedIn, Twitter/X, Facebook, Instagram). Planifiez vos publications, suivez les performances et optimisez votre présence en ligne — le tout depuis votre dashboard.",
    icon: Share2,
    features: [
      "Publication multi-canal en un clic",
      "Adaptation IA du contenu par réseau social",
      "Planification et calendrier éditorial",
      "Suivi des performances par plateforme",
    ],
    howItWorks: [
      "Rédigez votre contenu une seule fois",
      "L'IA l'adapte pour chaque réseau (ton, format, hashtags)",
      "Publiez immédiatement ou planifiez dans le calendrier",
    ],
    techs: [
      { name: "Postiz", description: "Publication multi-plateforme" },
      { name: "Canva API", description: "Création visuelle automatisée" },
    ],
    keywords: [
      "publication réseaux sociaux IA",
      "social media IA",
      "automatisation réseaux sociaux PME",
    ],
    relatedSlugs: ["curation-ia", "reseau-professionnel"],
  },
  {
    id: "module-g",
    letter: "G",
    slug: "transcription-vocale",
    title: "Transcription Vocale & Résumés IA",
    shortTitle: "Voice",
    description:
      "Enregistrez votre voix, obtenez une transcription Whisper avec timestamps mot par mot et des résumés IA automatiques.",
    longDescription:
      "Dictez vos notes, enregistrez vos réunions ou capturez vos idées à la volée. Whisper transcrit avec une précision remarquable, mot par mot avec timestamps. L'IA génère automatiquement des résumés structurés, extrait les points d'action et rend le tout cherchable en texte intégral depuis votre dashboard.",
    icon: Mic,
    features: [
      "Transcription Whisper haute précision",
      "Timestamps mot par mot pour navigation précise",
      "Résumés IA automatiques et points d'action",
      "Recherche full-text dans toutes vos transcriptions",
    ],
    howItWorks: [
      "Enregistrez votre voix depuis l'app ou importez un fichier audio",
      "Whisper transcrit avec timestamps mot par mot",
      "L'IA génère un résumé structuré et des actions à suivre",
    ],
    techs: [
      { name: "Whisper", description: "Speech-to-text OpenAI" },
      { name: "Ollama", description: "LLM local privacy-first" },
    ],
    keywords: [
      "transcription vocale IA",
      "speech to text français",
      "transcription réunion IA",
      "notes vocales IA",
    ],
    relatedSlugs: ["dashboard-intelligent", "analyse-documents"],
  },
  {
    id: "module-h",
    letter: "H",
    slug: "bot-telegram",
    title: "Bot Telegram IA",
    shortTitle: "Telegram",
    description:
      "Bot multi-utilisateur pour ingérer vos messages et exécuter des commandes IA : /analyse, /social, /save.",
    longDescription:
      "Votre assistant IA accessible depuis Telegram, 24h/24. Envoyez un lien, un texte ou une image — le bot l'ingère dans votre dashboard. Utilisez les commandes /save (sauvegarder), /ia analyse (analyser le contenu) ou /ia copie (adapter pour un autre contexte). Architecture multi-bot pour une scalabilité maximale.",
    icon: Send,
    features: [
      "Ingestion de contenu depuis Telegram vers le dashboard",
      "Commandes IA : /save, /ia analyse, /ia copie",
      "Support texte, liens et images",
      "Architecture multi-bot scalable",
    ],
    howItWorks: [
      "Connectez votre compte Telegram au bot augmenter.PRO",
      "Envoyez du contenu (texte, lien, image) au bot",
      "Utilisez les commandes /ia pour analyser ou transformer",
    ],
    techs: [
      { name: "Telegraf", description: "Framework bot Telegram" },
      { name: "Bull", description: "File d'attente de tâches Redis" },
    ],
    keywords: [
      "bot Telegram IA professionnel",
      "assistant Telegram",
      "automatisation Telegram IA",
    ],
    relatedSlugs: ["email-intelligent", "curation-ia"],
  },
  {
    id: "module-i",
    letter: "I",
    slug: "analyse-documents",
    title: "Analyse de Documents IA",
    shortTitle: "Documents",
    description:
      "Analysez vos PDF et images : OCR, extraction structurée, RAG Q&A et insights communautaires — en 3 niveaux de profondeur.",
    longDescription:
      "Importez n'importe quel document (PDF, facture, contrat, image) et choisissez votre niveau d'analyse. Tier 1 : lecture rapide (~2s). Tier 2 : extraction de données (montants, dates, lignes). Tier 3 : résumé IA complet + actions recommandées. Posez des questions à vos documents grâce au RAG et bénéficiez d'insights vérifiés par la communauté.",
    icon: FileText,
    features: [
      "3 niveaux d'analyse : rapide, extraction, complet",
      "OCR pour images et PDF scannés",
      "RAG Q&A — posez des questions à vos documents",
      "Insights communautaires vérifiés par les pairs",
    ],
    howItWorks: [
      "Importez votre document (PDF, image, facture, contrat)",
      "Choisissez le niveau d'analyse (rapide → complet)",
      "Consultez les extractions et posez des questions au document",
    ],
    techs: [
      { name: "Ollama Vision", description: "OCR et analyse d'images" },
      { name: "Qdrant", description: "Base vectorielle pour RAG" },
    ],
    keywords: [
      "analyse document IA",
      "OCR IA PDF",
      "RAG documents entreprise",
      "extraction données factures IA",
    ],
    relatedSlugs: ["transcription-vocale", "veille-concurrentielle"],
  },
  {
    id: "module-j",
    letter: "J",
    slug: "veille-concurrentielle",
    title: "Veille Concurrentielle & Market Intelligence",
    shortTitle: "Market Intel",
    description:
      "Surveillance automatique de vos concurrents par IA multi-agents : détection de changements, alertes et rapports.",
    longDescription:
      "Configurez vos concurrents et laissez CrewAI faire le travail. Nos agents IA multi-spécialisés surveillent en continu les sites, prix, fonctionnalités et actualités de vos concurrents. Détection automatique des changements (nouveau prix, nouvelle feature, embauche clé), alertes instantanées et rapports d'évolution avec graphiques de tendance.",
    icon: TrendingUp,
    features: [
      "Surveillance multi-agents CrewAI automatisée",
      "Détection de changements (prix, features, équipe, news)",
      "Alertes instantanées par email ou Telegram",
      "Rapports d'évolution et graphiques de tendance",
    ],
    howItWorks: [
      "Ajoutez les URLs et noms de vos concurrents",
      "Les agents IA surveillent en continu et détectent les changements",
      "Recevez des alertes et consultez les rapports de tendance",
    ],
    techs: [
      { name: "CrewAI", description: "Framework multi-agents IA" },
      { name: "Crawl4AI", description: "Web scraping self-hosted" },
    ],
    keywords: [
      "veille concurrentielle automatique",
      "intelligence marché IA",
      "surveillance concurrents IA",
      "analyse concurrentielle automatisée",
    ],
    relatedSlugs: ["curation-ia", "analyse-documents"],
  },
];

export const techStack = {
  frontend: [
    { name: "Next.js 15", icon: "▲", description: "React framework avec App Router" },
    { name: "React 19", icon: "⚛️", description: "UI library avec Server Components" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
    { name: "dnd-kit", icon: "🎯", description: "Drag & drop accessible (10kb)" },
  ],
  backend: [
    { name: "NestJS", icon: "🦁", description: "Framework Node.js avec Fastify" },
    { name: "Prisma", icon: "💎", description: "ORM TypeScript moderne" },
    { name: "PostgreSQL", icon: "🐘", description: "Base relationnelle + RLS" },
    { name: "Redis", icon: "🔴", description: "Cache & message broker" },
  ],
  ia: [
    { name: "LangChain", icon: "🦜", description: "Framework agents IA" },
    { name: "OpenAI GPT-4o", icon: "🤖", description: "LLM principal" },
    { name: "Ollama", icon: "🦙", description: "LLM local privacy-first" },
    { name: "Qdrant", icon: "🎯", description: "Vector DB pour RAG" },
  ],
  voice: [
    { name: "Whisper", icon: "🎙️", description: "Speech-to-text OpenAI" },
    { name: "Celery", icon: "🥬", description: "Task queue distribuée" },
    { name: "PyTorch", icon: "🔥", description: "Framework deep learning" },
    { name: "CUDA", icon: "⚡", description: "Accélération GPU NVIDIA" },
  ],
  realtime: [
    { name: "Yjs", icon: "🔄", description: "CRDT pour offline-first" },
    { name: "Hocuspocus", icon: "🪄", description: "WebSocket backend Yjs" },
    { name: "WebSockets", icon: "🔌", description: "Communication temps réel" },
    { name: "Zustand", icon: "🐻", description: "State management léger" },
  ],
  auth: [
    { name: "Better Auth", icon: "🔐", description: "Auth moderne avec SSO" },
    { name: "Keycloak", icon: "🏰", description: "Enterprise SSO SAML/OIDC" },
    { name: "Hanko", icon: "🔑", description: "Passkeys WebAuthn" },
    { name: "Infisical", icon: "🔒", description: "Secrets management" },
  ],
};

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getRelatedModules(module: Module): Module[] {
  return module.relatedSlugs
    .map((slug) => getModuleBySlug(slug))
    .filter((m): m is Module => m !== undefined);
}
