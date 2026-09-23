import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  CalendarDays, HeartHandshake, Home, MapPin, Menu,
  Send, Shield, TrendingUp, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher, SiteFooter } from "@/components/SiteChrome";
import { translations } from "@/i18n";
import { getRequestOrigin } from "@/lib/origin.functions";
import { useLanguage } from "@/lib/use-language";
const heroAsset = { url: "/images/matheus-office.jpg" };
const aboutAsset = { url: "/images/matheus-library.jpg" };
const headshotAsset = { url: "/images/matheus-headshot.webp" };
const ogAsset = { url: "/images/matheus-og.jpg" };

const WEB3FORMS_ACCESS_KEY = "";
const serviceIcons = [Shield, TrendingUp, Home, HeartHandshake, Users];
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
] as const;

export const Route = createFileRoute("/")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => {
    const image = `${loaderData}${ogAsset.url}`;
    const title = "Matheus Campos | Life Insurance Agent";
    const description = "Protecting What Matters Most. Life insurance, IUL, and family protection in English, Spanish, and Portuguese, serving families in all 50 states.";
    return {
      meta: [
        { title }, { name: "description", content: description },
        { property: "og:title", content: title }, { property: "og:description", content: description },
        { property: "og:type", content: "website" }, { property: "og:url", content: "/" },
        { property: "og:image", content: image }, { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: "/" }],
    };
  },
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [language, chooseLanguage] = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const t = translations[language];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const goToContact = (interest?: string) => {
    if (interest) setSelectedInterest(interest);
    setMenuOpen(false);
    window.setTimeout(() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim().slice(0, 50);
    const lastName = String(data.get("lastName") ?? "").trim().slice(0, 50);
    const name = `${firstName} ${lastName}`.trim();
    const phone = String(data.get("phone") ?? "").trim().slice(0, 30);
    const state = String(data.get("state") ?? "");
    const email = String(data.get("email") ?? "").trim().slice(0, 255);
    const interest = String(data.get("interest") ?? "").slice(0, 100);
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);
    const botcheck = String(data.get("botcheck") ?? "");
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPhone = /^[+()\d\s.-]{7,30}$/.test(phone);
    if (!firstName || !lastName || !validPhone || !states.includes(state as (typeof states)[number]) || !validEmail) {
      setFormState("error"); setFormMessage(t.required); return;
    }
    if (!WEB3FORMS_ACCESS_KEY) {
      setFormState("error"); setFormMessage(t.notConfigured); return;
    }
    setFormState("sending"); setFormMessage("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: `New website lead: ${name} (${state})`, name, phone, state, email, interest, message, botcheck }),
      });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setFormState("success"); form.reset(); setSelectedInterest("");
    } catch {
      setFormState("error"); setFormMessage(t.failure);
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-body-text">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy">
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3 justify-self-start" aria-label="Matheus Campos home">
            <Logo className="h-14 w-12 shrink-0" />
            <span className="min-w-0"><span className="block truncate font-display text-base text-gold sm:text-xl">MATHEUS CAMPOS</span><span className="mt-1 block max-w-62 text-[8px] font-bold uppercase leading-3 tracking-[0.15em] text-white sm:text-[9px]">{t.subtitle}</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-white lg:flex"><a href="#services" className="hover:text-gold">{t.nav.services}</a><a href="#about" className="hover:text-gold">{t.nav.about}</a><a href="#contact" className="hover:text-gold">{t.nav.contact}</a></nav>
          <div className="hidden justify-self-end lg:flex"><LanguageSwitcher language={language} choose={chooseLanguage} /></div>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)} aria-label={t.nav.menu} className="text-white hover:bg-navy-dark hover:text-white lg:hidden"><Menu size={25} /></Button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 flex flex-col bg-navy px-6 py-6 text-white lg:hidden">
        <div className="flex items-center justify-between"><div className="flex items-center gap-3"><img src={headshotAsset.url} alt="Matheus Campos" className="h-12 w-12 rounded-full border-2 border-gold object-cover" /><span className="font-display text-sm">MATHEUS CAMPOS</span></div><Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label={t.nav.close} className="text-white hover:bg-navy-dark"><X /></Button></div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 font-display text-3xl"><a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a><a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a></nav>
        <div className="flex justify-center"><LanguageSwitcher language={language} choose={chooseLanguage} /></div>
      </div>}

      <section id="top" className="relative min-h-[90vh] overflow-hidden bg-navy text-white">
        <img src={heroAsset.url} alt="Matheus Campos standing with his arms crossed" className="absolute inset-0 h-full w-full object-cover object-[62%_0%] lg:left-auto lg:w-[78%] lg:object-[70%_0%]" />
        {/* Darken behind the text so it stays readable: bottom-up on phones, left-to-right on desktop. */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/10 lg:bg-gradient-to-r lg:from-navy lg:from-25% lg:via-navy/70 lg:via-45% lg:to-transparent lg:to-75%" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-end px-5 lg:items-center lg:px-10">
          <div className="z-10 w-full pb-36 pt-8 text-center lg:max-w-xl lg:pb-48 lg:pt-14 lg:text-left">
            <blockquote className="relative mx-auto max-w-2xl font-display text-[clamp(2rem,4vw,4.15rem)] leading-[1.25] lg:mx-0"><span className="mr-2 text-gold">“</span>{t.quote}<span className="ml-2 text-gold">”</span></blockquote>
            <p className="mt-6 text-sm font-medium text-gold sm:text-base">{t.attribution}</p>
            <p className="mt-7 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] lg:justify-start"><MapPin size={16} className="text-gold" />{t.nationwide}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button onClick={() => goToContact()} size="lg" className="h-12 rounded-full bg-teal px-6 font-bold uppercase text-white hover:bg-navy-dark"><CalendarDays />{t.freeQuote}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-pattern relative flow-root pb-20 sm:pb-24">
        {/* Anchor on the cards, not the section: the cards overlap the hero, so the section top would cut them off. */}
        <div id="services" className="relative z-20 mx-auto -mt-24 scroll-mt-6 grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-5 md:gap-4 lg:-mt-32 lg:gap-5 lg:px-10">
          {t.services.map((label, index) => { const Icon = serviceIcons[index] ?? Shield; return <button key={label} type="button" onClick={() => goToContact(t.interests[index])} className={`group relative flex min-h-44 flex-col items-center justify-center overflow-hidden rounded-md bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 sm:min-h-48 md:p-3 lg:p-4 ${index === 4 ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] md:col-span-1 md:mx-0 md:w-auto" : ""}`}><Icon size={40} className="text-gold" strokeWidth={1.6} /><span className="mt-5 font-display text-sm leading-6 text-navy sm:text-base md:text-sm lg:text-base">{label}</span><span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-teal transition-transform group-hover:scale-x-100" /></button>; })}
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-center sm:py-28"><Reveal><h2 className="mx-auto max-w-4xl font-display text-3xl leading-tight text-navy sm:text-5xl">{t.highlightStart}<span className="text-gold">{t.highlightWord}</span>{t.highlightEnd}</h2><div className="mx-auto mt-8 h-0.5 w-20 bg-gold" /></Reveal></section>

      <section id="about" className="relative overflow-hidden bg-light-gray py-20 sm:py-28">
        <SectionMarker number="01" /><Watermark text="PROTECTION" />
        <Reveal className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16">
          <div className="relative mx-3 mb-3"><div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-gold" /><img src={aboutAsset.url} alt="Matheus Campos seated in a library" className="relative aspect-[4/3] w-full rounded-md object-cover" /></div>
          <div><TextColumn title={t.story} paragraphs={t.storyText} /><div className="mt-12 grid grid-cols-3 gap-3 border-t border-gold pt-8">{t.stats.map(([value, label]) => <div key={label} className="text-center"><p className="font-display text-2xl text-gold sm:text-3xl">{value}</p><p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-navy sm:text-[10px]">{label}</p></div>)}</div></div>
        </Reveal>
      </section>

      <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionMarker number="02" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-16">
          <Reveal className="lg:pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{t.contactEyebrow}</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">{t.contactHeading}<span className="block italic text-gold">{t.contactHeadingAccent}</span></h2>
            <p className="mt-6 max-w-md leading-8 text-body-text">{t.contactText}</p>
            <p className="mt-10 max-w-sm text-xs leading-5 text-body-text/70">{t.contactNote}</p>
          </Reveal>
          <Reveal>
            <div className="rounded-md border border-body-text/15 bg-white p-6 shadow-2xl sm:p-10">
              {formState === "success" ? <div role="status" className="border-l-4 border-gold py-2 pl-6 font-display text-2xl leading-10 text-navy">{t.success}</div> : <>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{t.formEyebrow}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-navy">{t.formTitle}</h3>
                <p className="mt-4 text-sm leading-6 text-body-text">{t.formIntro}</p>
                <form id="contact-form" onSubmit={submitForm} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                  <FormField label={t.firstName} name="firstName" required maxLength={50} autoComplete="given-name" />
                  <FormField label={t.lastName} name="lastName" required maxLength={50} autoComplete="family-name" />
                  <FormField label={t.email} name="email" type="email" required maxLength={255} autoComplete="email" />
                  <FormField label={t.cellPhone} name="phone" type="tel" required maxLength={30} autoComplete="tel" />
                  <SelectField label={t.state} name="state" required placeholder={t.selectState} options={states} />
                  <SelectField label={t.interest} name="interest" value={selectedInterest} onChange={setSelectedInterest} placeholder={t.selectInterest} options={t.interests} />
                  <label className="grid gap-2 text-xs font-medium text-navy sm:col-span-2">{t.messageLabel}<textarea name="message" rows={4} maxLength={2000} placeholder={t.messagePlaceholder} className={`${fieldClass} h-auto py-3`} /></label>
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  {formMessage && <p role="alert" className="text-sm font-medium text-navy sm:col-span-2">{formMessage}</p>}
                  <p className="text-xs leading-5 text-body-text/80 sm:col-span-2">{t.consentStart}<Link to="/privacy" className="text-teal underline underline-offset-2 hover:text-navy">{t.privacyLink}</Link>{t.consentEnd}</p>
                  <Button type="submit" disabled={formState === "sending"} size="lg" className="h-12 rounded-full bg-teal px-7 font-bold uppercase text-white hover:bg-navy-dark sm:col-span-2 sm:w-fit"><Send />{formState === "sending" ? t.sending : t.send}</Button>
                </form>
              </>}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter language={language} />

    </main>
  );
}

function SectionMarker({ number }: { number: string }) { return <div className="absolute left-3 top-24 hidden items-center gap-3 lg:flex"><span className="font-display text-sm text-gold">{number}</span><span className="h-px w-8 bg-gold" /></div>; }
function Watermark({ text }: { text: string }) { return <div aria-hidden="true" className="absolute -right-28 top-1/2 hidden -translate-y-1/2 rotate-90 font-display text-7xl text-navy opacity-[0.05] lg:block">{text}</div>; }
function TextColumn({ title, paragraphs }: { title: string; paragraphs: readonly string[] }) { return <div><h2 className="font-display text-3xl text-navy sm:text-4xl">{title}</h2><div className="mt-4 h-0.5 w-12 bg-gold" />{paragraphs.map((text) => <p key={text} className="mt-5 leading-8 text-body-text">{text}</p>)}</div>; }
const fieldClass = "h-12 w-full rounded-md border border-body-text/25 bg-white px-4 text-sm text-body-text outline-none transition placeholder:text-body-text/50 focus:border-teal";
function FormField({ label, name, type = "text", required = false, maxLength, autoComplete }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number; autoComplete?: string }) { return <label className="grid gap-2 text-xs font-medium text-navy">{label}<input name={name} type={type} required={required} maxLength={maxLength} autoComplete={autoComplete} className={fieldClass} /></label>; }
// Controlled only when a value is passed (Interest is pre-filled by the service cards); otherwise uncontrolled so it can still be changed.
function SelectField({ label, name, required = false, value, onChange, placeholder, options }: { label: string; name: string; required?: boolean; value?: string; onChange?: (value: string) => void; placeholder: string; options: readonly string[] }) { const valueProps = value === undefined ? { defaultValue: "" } : { value, onChange: (event: ChangeEvent<HTMLSelectElement>) => onChange?.(event.target.value) }; return <label className="grid gap-2 text-xs font-medium text-navy">{label}<select name={name} required={required} {...valueProps} className={fieldClass}><option value="">{placeholder}</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>; }
