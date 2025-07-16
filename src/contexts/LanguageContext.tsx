import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage, Language } from '../hooks/useLanguage';

// Check if we're on the client side
const isClient = typeof window !== 'undefined';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

// Default context for SSR
const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: true
};

// Create context with default value for SSR
const LanguageContext = createContext<LanguageContextType>(defaultContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Only use the hook on the client side
  const languageHook = useLanguage();

  return (
    <LanguageContext.Provider value={languageHook}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  return context;
};
