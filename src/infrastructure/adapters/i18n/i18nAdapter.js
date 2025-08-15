// src/infrastructure/adapters/i18n/i18nAdapter.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr }
};

export const i18nAdapter = {
  init: () =>
    i18n.use(initReactI18next).init({
      resources,
      lng: 'fr',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    }),
  t: (key) => i18n.t(key),

  // Change la langue active
  changeLanguage: (lang) => i18n.changeLanguage(lang),

  // Récupère la langue courante
  getCurrentLanguage: () => i18n.language,

  // Traduit une clé
  t: (key, options) => i18n.t(key, options),

  // Fournit le hook react-i18next (optionnel)
  useTranslation: () => {
    return useTranslation();
  }
};
