import { useEffect, useState } from "react";
import type { Language } from "@/i18n";

const STORAGE_KEY = "matheus-language";

/** Current site language, remembered across pages and visits. */
export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es" || saved === "pt") setLanguage(saved);
  }, []);

  const chooseLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return [language, chooseLanguage] as const;
}
