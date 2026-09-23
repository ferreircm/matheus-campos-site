import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { translations, type Language } from "@/i18n";

export function LanguageSwitcher({ language, choose }: { language: Language; choose: (value: Language) => void }) {
  return <div className="flex items-center text-[11px] font-bold text-white" aria-label="Language">{(["en", "es", "pt"] as const).map((code, index) => <span key={code} className="flex items-center"><Button type="button" variant="ghost" size="sm" onClick={() => choose(code)} aria-pressed={language === code} className={`h-8 px-2 uppercase hover:bg-transparent hover:text-gold ${language === code ? "underline decoration-gold decoration-2 underline-offset-6" : ""}`}>{code}</Button>{index < 2 && <span className="opacity-40">|</span>}</span>)}</div>;
}

export function SiteFooter({ language }: { language: Language }) {
  const t = translations[language];
  return (
    <footer className="bg-navy px-5 py-14 text-center text-white">
      <Logo className="mx-auto h-12 w-12" />
      <p className="mt-4 font-display text-lg">MATHEUS CAMPOS</p>
      <p className="mt-2 text-xs text-light-gray">{t.footerTitle} • NPN: 22343676</p>
      <nav className="mt-6 flex items-center justify-center gap-6 text-xs font-medium" aria-label="Legal">
        <Link to="/privacy" className="hover:text-gold">{t.footerLinks.privacy}</Link>
        <span className="opacity-40">|</span>
        <Link to="/faq" className="hover:text-gold">{t.footerLinks.faq}</Link>
      </nav>
      <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-light-gray">© {new Date().getFullYear()} Matheus Campos. {t.rights}</p>
    </footer>
  );
}

/** Header + footer frame for the text pages (Privacy Policy, FAQ). */
export function SubpageLayout({ language, choose, children }: { language: Language; choose: (value: Language) => void; children: ReactNode }) {
  const t = translations[language];
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-body-text">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy">
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between gap-4 px-4 lg:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Matheus Campos home">
            <Logo className="h-14 w-12 shrink-0" />
            <span className="min-w-0"><span className="block truncate font-display text-base text-gold sm:text-xl">MATHEUS CAMPOS</span><span className="mt-1 hidden max-w-62 text-[9px] font-bold uppercase leading-3 tracking-[0.15em] text-white sm:block">{t.subtitle}</span></span>
          </Link>
          <LanguageSwitcher language={language} choose={choose} />
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-teal hover:text-navy"><ArrowLeft size={14} />{t.footerLinks.back}</Link>
        {children}
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
