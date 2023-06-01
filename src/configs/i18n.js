import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import turkish from "../locales/tr/translation.json";
import english from "../locales/en/translation.json";
import { getLocales } from 'expo-localization';

const resources = {
  en: { translation: english },
  tr: { translation: turkish },
};
const deviceLanguage = getLocales()[0].languageCode;

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  debug: false,
  lng: deviceLanguage,
  initImmediate: false,

  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18next;
