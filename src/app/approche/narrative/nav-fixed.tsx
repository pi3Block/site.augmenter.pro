"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Zap } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/approche", label: "Approche" },
  { href: "/approche#prestations", label: "Prestations & Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/prompts", label: "Prompts" },
  { href: "/contact", label: "Contact" },
];

export function NavFixed() {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 text-white md:px-8 md:py-5"
      style={{ mixBlendMode: "difference" }}
    >
      <Link
        href="/"
        data-hover
        className="pointer-events-auto inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em]"
      >
        <span
          aria-hidden
          className="grid h-[22px] w-[22px] place-items-center rounded-md bg-(--violet-600) text-white"
        >
          <Zap className="h-3 w-3" />
        </span>
        <span>augmenter</span>
        <span className="text-(--violet-400)">.PRO</span>
      </Link>

      {/* Desktop nav */}
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] md:flex"
      >
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href.startsWith("/approche") && pathname === "/approche");
          return (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              aria-current={isActive ? "page" : undefined}
              className="rounded-md px-3 py-2 transition-opacity"
              style={{ opacity: isActive ? 1 : 0.7 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = isActive ? "1" : "0.7")
              }
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          data-hover
          className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-white/70 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black"
        >
          Premier diagnostic
        </Link>
      </nav>

      {/* Mobile menu trigger */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button
            type="button"
            aria-label="Ouvrir le menu"
            data-hover
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/40"
            style={{ mixBlendMode: "normal" }}
          >
            <Menu className="h-4 w-4" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground"
                >
                  <Zap className="h-4 w-4" />
                </span>
                <span className="text-lg font-bold tracking-tight">
                  augmenter<span className="text-primary">.PRO</span>
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4 pt-4">
            {NAV_LINKS.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Premier diagnostic
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
