import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Send } from "lucide-react";
import { SubpageLayout } from "@/components/SiteChrome";
import { faq } from "@/content/faq";
import { useLanguage } from "@/lib/use-language";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Matheus Campos" },
      { name: "description", content: "Answers to common questions about life insurance, IUL, living benefits, mortgage protection, and working with Matheus Campos." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [language, chooseLanguage] = useLanguage();
  const f = faq[language];

  return (
    <SubpageLayout language={language} choose={chooseLanguage}>
      <h1 className="mt-8 font-display text-4xl text-navy sm:text-5xl">{f.title}</h1>
      <div className="mt-6 h-0.5 w-16 bg-gold" />
      <p className="mt-6 leading-8">{f.intro}</p>
      <div className="mt-10 divide-y divide-light-gray border-y border-light-gray">
        {f.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown size={20} className="shrink-0 text-gold transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-8">{item.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-14 rounded-md bg-light-gray p-8 text-center">
        <h2 className="font-display text-2xl text-navy">{f.ctaTitle}</h2>
        <p className="mt-3">{f.ctaText}</p>
        {/* Plain anchor: a full load lets the browser scroll to the home page's #contact. */}
        <a href="/#contact" className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-teal px-7 text-sm font-bold uppercase text-white transition-colors hover:bg-navy-dark"><Send size={16} />{f.ctaButton}</a>
      </div>
    </SubpageLayout>
  );
}
