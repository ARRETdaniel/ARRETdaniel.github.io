import { useState, useEffect } from 'react';
import { Language } from '../hooks/useLanguage';

// Default translations for server-side rendering
const defaultTranslations = {
  language: 'en' as Language,
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: true
};

/**
 * Helper function to detect if we're on the client side
 */
export const isClientSide = typeof window !== 'undefined';

/**
 * Creates a version of useLanguageContext that is safe for SSR
 */
export const createSafeLanguage = () => {
  // For SSR, return default translations
  if (!isClientSide) {
    return defaultTranslations;
  }

  // For client-side, dynamically import the real hook
  try {
    // This is safe because we've already checked for client-side
    const { useLanguageContext } = require('./LanguageContext');
    return useLanguageContext();
  } catch (e) {
    console.error('Error accessing language context:', e);
    return defaultTranslations;
  }
};
