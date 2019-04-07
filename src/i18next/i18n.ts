import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "../locales/de/translation.json";
import en from "../locales/en/translation.json";
const resources = {
  de: { translation: { ...de } },
  en: { translation: { ...en } }
};

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "de",
    debug: true,

    // allow keys to be phrases having `:`, `.`
    // nsSeparator: false,
    // keySeparator: false,

    // do not load a fallback
    fallbackLng: "de",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
