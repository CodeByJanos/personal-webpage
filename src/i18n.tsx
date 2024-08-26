import en from './locales/en.json';
import hu from './locales/hu.json';

type Translations = typeof en; 

const translations: { [key: string]: Translations } = {
  en,
  hu
};

let currentLanguage: keyof typeof translations = 'en';

export const setLanguage = (lang: keyof typeof translations) => {
  currentLanguage = lang;
};

export const translate = (key: string): string => {
  const keys = key.split('.');
  let result: any = translations[currentLanguage];
  keys.forEach(k => result = result[k]);
  return result || key;
};

