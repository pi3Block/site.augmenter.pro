import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ArticleReadEvent } from "@/components/layout/article-read-event";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

interface ArticleLayoutProps {
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  slug?: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  title,
  excerpt,
  tags,
  readTime,
  date,
  slug,
  children,
}: ArticleLayoutProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    author: {
      "@type": "Person",
      name: "Pierre Legrand",
      url: "https://pierrelegrand.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "augmenter.PRO",
      url: "https://augmenter.pro",
    },
    datePublished: date,
    keywords: tags.join(", "),
    inLanguage: "fr-FR",
    ...(slug && { url: `https://augmenter.pro/blog/${slug}` }),
    isPartOf: {
      "@type": "WebSite",
      name: "augmenter.PRO",
      url: "https://augmenter.pro",
    },
  };

  return (
    <div className="pt-16">
      {slug ? (
        <ArticleReadEvent
          slug={slug}
          title={title}
          readTime={readTime}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Button asChild variant="ghost" size="sm" className="mb-8 gap-2">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">{excerpt}</p>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
          </div>

          <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground/90 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:ml-4 [&_li]:list-disc [&_li]:text-muted-foreground [&_p]:text-muted-foreground [&_strong]:text-foreground [&_ul]:mt-3 [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </article>

      <CTA />
    </div>
  );
}
