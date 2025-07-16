import { useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

// Translation cache
const translationCache: Record<Language, Record<string, any>> = {
  en: {},
  pt: {}
};

// Check if we're on the client side
const isClient = typeof window !== 'undefined';

export const useLanguage = (): LanguageContextType => {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for a specific language
  const loadTranslations = useCallback(async (lang: Language) => {
    if (translationCache[lang] && Object.keys(translationCache[lang]).length > 0) {
      setTranslations(translationCache[lang]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      if (isClient) {
        const response = await fetch(`/locales/${lang}/common.json`);
        const data = await response.json();
        translationCache[lang] = data;
        setTranslations(data);
      }
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to English if loading fails
      if (lang !== 'en') {
        loadTranslations('en');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  // Initialize language from localStorage or default to 'en'
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem('language') as Language;
      const initialLanguage = savedLanguage || 'en';
      setLanguageState(initialLanguage);
      loadTranslations(initialLanguage);
    }
  }, [loadTranslations]);

  // Set language and persist to localStorage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);

    if (isClient) {
      localStorage.setItem('language', lang);
      // Update the HTML lang attribute
      document.documentElement.lang = lang;
    }

    loadTranslations(lang);
  }, [loadTranslations]);

  // Translation function with nested key support
  const t = useCallback((key: string): string => {
    if (!translations || Object.keys(translations).length === 0) {
      return key;
    }

    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }, [translations]);

  return {
    language,
    setLanguage,
    t,
    isLoading
  };
};
