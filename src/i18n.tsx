import { useLanguage } from "./context/LanguageContext";
import en from "./locales/en.json";
import hu from "./locales/hu.json";

type Translations = typeof en;

const translations: { [key: string]: Translations } = {
  en,
  hu,
};

export const useTranslate = () => {
  const { language } = useLanguage();

  const translate = (key: string): string => {
    const keys = key.split(".");
    let result: any = translations[language];
    keys.forEach((k) => (result = result?.[k]));
    return result || key;
  };

  return translate;
};
