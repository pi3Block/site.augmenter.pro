"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Envoie un événement GTM "lecture_article" au chargement de la page.
 * Utilisé dans ArticleLayout pour tracer les lectures d'articles dans GA4.
 */
interface ArticleReadEventProps {
  slug: string;
  title: string;
  readTime?: string;
}

export function ArticleReadEvent({
  slug,
  title,
  readTime,
}: ArticleReadEventProps) {
  useEffect(() => {
    sendGTMEvent({
      event: "lecture_article",
      article_slug: slug,
      article_title: title,
      ...(readTime && { article_read_time: readTime }),
    });
  }, [slug, title, readTime]);

  return null;
}
