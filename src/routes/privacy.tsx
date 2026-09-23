import { createFileRoute } from "@tanstack/react-router";
import { SubpageLayout } from "@/components/SiteChrome";
import { privacy } from "@/content/privacy";
import { useLanguage } from "@/lib/use-language";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Matheus Campos" },
      { name: "description", content: "How Matheus Campos collects, uses, and protects the information you share through this website." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const [language, chooseLanguage] = useLanguage();
  const p = privacy[language];

  return (
    <SubpageLayout language={language} choose={chooseLanguage}>
      <h1 className="mt-8 font-display text-4xl text-navy sm:text-5xl">{p.title}</h1>
      <div className="mt-6 h-0.5 w-16 bg-gold" />
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-gold">{p.updated}</p>
      <p className="mt-6 leading-8">{p.intro}</p>
      {p.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-display text-2xl text-navy">{section.heading}</h2>
          {section.paragraphs?.map((text) => <p key={text} className="mt-4 leading-8">{text}</p>)}
          {section.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 marker:text-gold">
              {section.bullets.map((text) => <li key={text}>{text}</li>)}
            </ul>
          )}
        </section>
      ))}
    </SubpageLayout>
  );
}
