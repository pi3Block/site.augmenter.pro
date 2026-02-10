import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
      "frame-src https://www.googletagmanager.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/ia-booster-pour-pme-and-independants-votre-intelligence-artificielle-de-la-strategie-a-laction", destination: "/strategie-ia-pme", permanent: true },
      { source: "/comparatif-forces-et-faiblesses-des-llm-dans-les-processus-de-vente-commerciale", destination: "/blog/comparatif-llm-vente-commerciale", permanent: true },
      { source: "/audit-360-signes-moderniser-informatique-pme-yvelines-val-doise", destination: "/blog/5-signes-moderniser-informatique-pme", permanent: true },
      { source: "/construisez-votre-propre-machine-de-guerre-commerciale", destination: "/blog/machine-de-guerre-commerciale", permanent: true },
      { source: "/rendez-vous-audit-360", destination: "/contact", permanent: true },
      { source: "/claude-code-prompt-architecture", destination: "/blog/claude-code-prompt-architecture", permanent: true },
      { source: "/prestations-et-tarifs", destination: "/prestations", permanent: true },
      { source: "/actualites-pro", destination: "/blog", permanent: true },
      { source: "/approche-360", destination: "/approche", permanent: true },
      { source: "/projets-pro", destination: "/idees", permanent: true },
    ];
  },
};

export default nextConfig;
