import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import ar from "./locales/ar/common.json";
import ja from "./locales/ja/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ar: { translation: ar },
      ja: { translation: ja },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
