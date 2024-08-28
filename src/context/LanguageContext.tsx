import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";

interface LanguageContextType {
  language: "en" | "hu";
  switchLanguage: (lang: "en" | "hu") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "hu">("en");

  const switchLanguage = (lang: "en" | "hu") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
