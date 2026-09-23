import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  CalendarDays, HeartHandshake, Home, MapPin, Menu,
  Send, Shield, TrendingUp, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { translations, type Language } from "@/i18n";
import { getRequestOrigin } from "@/lib/origin.functions";
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
    const title = "Matheus Campos | Licensed Life Insurance Agent";
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
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const t = translations[language];

  useEffect(() => {
    const saved = localStorage.getItem("matheus-language");
    if (saved === "en" || saved === "es" || saved === "pt") setLanguage(saved);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const chooseLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem("matheus-language", next);
  };
  const goToContact = (interest?: string) => {
    if (interest) setSelectedInterest(interest);
    setMenuOpen(false);
    window.setTimeout(() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const phone = String(data.get("phone") ?? "").trim().slice(0, 30);
    const state = String(data.get("state") ?? "");
    const email = String(data.get("email") ?? "").trim().slice(0, 255);
    const interest = String(data.get("interest") ?? "").slice(0, 100);
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);
    const botcheck = String(data.get("botcheck") ?? "");
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPhone = /^[+()\d\s.-]{7,30}$/.test(phone);
    if (!name || !validPhone || !states.includes(state as (typeof states)[number]) || !validEmail) {
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
    <main className="min-h-screen overflow-x-hidden bg-white text-body-text">
      <header className="relative z-40 border-b border-white/10 bg-navy">
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3 justify-self-start" aria-label="Matheus Campos home">
            <Logo className="h-14 w-12 shrink-0" />
            <span className="min-w-0"><span className="block truncate font-display text-base text-gold sm:text-xl">MATHEUS CAMPOS</span><span className="mt-1 block max-w-62 text-[8px] font-bold uppercase leading-3 tracking-[0.15em] text-white sm:text-[9px]">{t.subtitle}</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-white lg:flex"><a href="#about" className="hover:text-gold">{t.nav.about}</a><a href="#services" className="hover:text-gold">{t.nav.services}</a><a href="#contact" className="hover:text-gold">{t.nav.contact}</a></nav>
          <div className="hidden justify-self-end lg:flex"><LanguageSwitcher language={language} choose={chooseLanguage} /></div>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)} aria-label={t.nav.menu} className="text-white hover:bg-navy-dark hover:text-white lg:hidden"><Menu size={25} /></Button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 flex flex-col bg-navy px-6 py-6 text-white lg:hidden">
        <div className="flex items-center justify-between"><div className="flex items-center gap-3"><img src={headshotAsset.url} alt="Matheus Campos" className="h-12 w-12 rounded-full border-2 border-gold object-cover" /><span className="font-display text-sm">MATHEUS CAMPOS</span></div><Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label={t.nav.close} className="text-white hover:bg-navy-dark"><X /></Button></div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 font-display text-3xl"><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a><a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a><a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a></nav>
        <div className="flex justify-center"><LanguageSwitcher language={language} choose={chooseLanguage} /></div>
      </div>}

      <section id="top" className="relative min-h-[90vh] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark" />
        <DecorativeSquares />
        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="order-2 z-10 pb-28 pt-8 text-center lg:order-1 lg:pb-36 lg:pt-14 lg:text-left">
            <blockquote className="relative mx-auto max-w-2xl font-display text-[clamp(2rem,4vw,4.15rem)] leading-[1.25] lg:mx-0"><span className="mr-2 text-gold">“</span>{t.quote}<span className="ml-2 text-gold">”</span></blockquote>
            <p className="mt-6 text-sm font-medium text-gold sm:text-base">{t.attribution}</p>
            <p className="mt-7 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] lg:justify-start"><MapPin size={16} className="text-gold" />{t.nationwide}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button onClick={() => goToContact()} size="lg" className="h-12 rounded-full bg-teal px-6 font-bold uppercase text-white hover:bg-navy-dark"><CalendarDays />{t.freeQuote}</Button>
            </div>
          </div>
          <div className="relative order-1 flex min-h-[48vh] items-end justify-center self-stretch pt-8 lg:order-2 lg:min-h-0 lg:pt-12">
            <svg aria-hidden="true" viewBox="0 0 600 600" className="absolute bottom-[4%] left-1/2 w-[min(94vw,610px)] -translate-x-1/2"><circle className="hero-ring" cx="310" cy="310" r="235" fill="none" stroke="var(--gold)" strokeWidth="18" strokeLinecap="round" strokeDasharray="1220 260" transform="rotate(-38 310 310)" /></svg>
            <img src={heroAsset.url} alt="Matheus Campos standing with his arms crossed" className="relative z-10 max-h-[58vh] w-full max-w-2xl object-contain object-bottom lg:max-h-[78vh]" />
          </div>
        </div>
      </section>

      <section id="services" className="service-pattern relative pb-20 sm:pb-24">
        <div className="relative z-20 mx-auto -mt-20 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:px-10">
          {t.services.map((label, index) => { const Icon = serviceIcons[index] ?? Shield; return <button key={label} type="button" onClick={() => goToContact(t.interests[index])} className={`group relative flex min-h-44 flex-col items-center justify-center overflow-hidden rounded-md bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 sm:min-h-48 ${index === 4 ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:col-span-1 sm:w-auto" : ""}`}><Icon size={40} className="text-gold" strokeWidth={1.6} /><span className="mt-5 font-display text-sm leading-6 text-navy sm:text-base">{label}</span><span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-teal transition-transform group-hover:scale-x-100" /></button>; })}
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-center sm:py-28"><Reveal><h2 className="mx-auto max-w-4xl font-display text-3xl leading-tight text-navy sm:text-5xl">{t.highlightStart}<span className="text-gold">{t.highlightWord}</span>{t.highlightEnd}</h2><div className="mx-auto mt-8 h-0.5 w-20 bg-gold" /></Reveal></section>

      <section id="about" className="relative overflow-hidden bg-light-gray py-20 sm:py-28">
        <SectionMarker number="01" /><Watermark text="PROTECTION" />
        <Reveal className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16">
          <div className="relative mx-3 mb-3"><div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-gold" /><img src={aboutAsset.url} alt="Matheus Campos seated in a library" className="relative aspect-[4/3] w-full rounded-md object-cover" /></div>
          <div><div className="grid gap-10 sm:grid-cols-2"><TextColumn title={t.mission} text={t.missionText} /><TextColumn title={t.work} text={t.workText} /></div><div className="mt-12 grid grid-cols-3 gap-3 border-t border-gold pt-8">{t.stats.map(([value, label]) => <div key={label} className="text-center"><p className="font-display text-2xl text-gold sm:text-3xl">{value}</p><p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-navy sm:text-[10px]">{label}</p></div>)}</div></div>
        </Reveal>
      </section>

      <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionMarker number="02" /><Watermark text="CONTACT" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-16"><Reveal><h2 className="font-display text-4xl text-navy sm:text-5xl">{t.letsTalk}</h2><p className="mt-5 max-w-2xl leading-7 text-body-text">{t.contactSubtext}</p></Reveal>
          <div className="mt-12 max-w-3xl">
            <Reveal>{formState === "success" ? <div role="status" className="border-l-4 border-teal bg-light-gray p-8 font-display text-2xl leading-10 text-navy">{t.success}</div> : <form id="contact-form" onSubmit={submitForm} noValidate className="grid gap-5 sm:grid-cols-2">
              <FormField label={t.name} name="name" required maxLength={100} />
              <FormField label={t.phone} name="phone" type="tel" required maxLength={30} />
              <SelectField label={t.state} name="state" required value="" placeholder={t.selectState} options={states} />
              <FormField label={t.email} name="email" type="email" required maxLength={255} />
              <SelectField label={t.interest} name="interest" value={selectedInterest} onChange={setSelectedInterest} placeholder={t.selectInterest} options={t.interests} />
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">{t.message}<textarea name="message" rows={5} maxLength={2000} className="rounded-lg border border-light-gray bg-white p-4 text-sm font-normal normal-case tracking-normal text-body-text outline-none transition focus:border-teal" /></label>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              {formMessage && <p role="alert" className="text-sm text-navy sm:col-span-2">{formMessage}</p>}
              <Button type="submit" disabled={formState === "sending"} size="lg" className="h-12 rounded-full bg-teal px-7 font-bold uppercase text-white hover:bg-navy-dark sm:col-span-2 sm:w-fit"><Send />{formState === "sending" ? t.sending : t.send}</Button>
            </form>}</Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-navy px-5 py-14 text-center text-white"><Logo className="mx-auto h-12 w-12" /><p className="mt-4 font-display text-lg">MATHEUS CAMPOS</p><p className="mt-2 text-xs text-light-gray">{t.footerTitle} • NPN: 22343676</p><p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-light-gray">© {new Date().getFullYear()} Matheus Campos. {t.rights}</p></footer>

      <aside className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-4 xl:flex xl:flex-col"><span className="h-14 w-px bg-gold" /><span className="rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.15em] text-navy">{t.connect}</span><span className="mt-12 h-14 w-px bg-gold" /></aside>
    </main>
  );
}

function LanguageSwitcher({ language, choose }: { language: Language; choose: (value: Language) => void }) {
  return <div className="flex items-center text-[11px] font-bold text-white" aria-label="Language">{(["en", "es", "pt"] as const).map((code, index) => <span key={code} className="flex items-center"><Button type="button" variant="ghost" size="sm" onClick={() => choose(code)} aria-pressed={language === code} className={`h-8 px-2 uppercase hover:bg-transparent hover:text-gold ${language === code ? "underline decoration-gold decoration-2 underline-offset-6" : ""}`}>{code}</Button>{index < 2 && <span className="opacity-40">|</span>}</span>)}</div>;
}

function DecorativeSquares() { return <div aria-hidden="true" className="absolute inset-0 opacity-20"><span className="absolute right-[12%] top-[14%] h-3 w-3 bg-gold" /><span className="absolute right-[43%] top-[34%] h-2 w-2 bg-teal" /><span className="absolute right-[8%] top-[56%] h-5 w-5 border border-teal" /><span className="absolute right-[39%] top-[70%] h-3 w-3 border border-gold" /></div>; }
function SectionMarker({ number }: { number: string }) { return <div className="absolute left-3 top-24 hidden items-center gap-3 lg:flex"><span className="font-display text-sm text-gold">{number}</span><span className="h-px w-8 bg-gold" /></div>; }
function Watermark({ text }: { text: string }) { return <div aria-hidden="true" className="absolute -right-28 top-1/2 hidden -translate-y-1/2 rotate-90 font-display text-7xl text-navy opacity-[0.05] lg:block">{text}</div>; }
function TextColumn({ title, text }: { title: string; text: string }) { return <div><h2 className="font-display text-2xl text-navy">{title}</h2><div className="mt-4 h-0.5 w-12 bg-gold" /><p className="mt-5 leading-8 text-body-text">{text}</p></div>; }
function FormField({ label, name, type = "text", required = false, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) { return <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">{label}<input name={name} type={type} required={required} maxLength={maxLength} className="h-12 rounded-lg border border-light-gray bg-white px-4 text-sm font-normal normal-case tracking-normal text-body-text outline-none transition focus:border-teal" /></label>; }
function SelectField({ label, name, required = false, value, onChange, placeholder, options }: { label: string; name: string; required?: boolean; value: string; onChange?: (value: string) => void; placeholder: string; options: readonly string[] }) { return <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">{label}<select name={name} required={required} value={value} onChange={(event) => onChange?.(event.target.value)} className="h-12 rounded-lg border border-light-gray bg-white px-4 text-sm font-normal normal-case tracking-normal text-body-text outline-none transition focus:border-teal"><option value="">{placeholder}</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>; }
