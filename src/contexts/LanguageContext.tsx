import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'te' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Mock translations (for MVP)
const translations: Record<Language, Record<string, string>> = {
  en: {},
  hi: {
    "Welcome to ShikshaPath": "शिक्षापथ में आपका स्वागत है",
    "Student Login": "छात्र लॉगिन",
    "Teacher Login": "शिक्षक लॉगिन"
  },
  te: {
    "Welcome to ShikshaPath": "శిక్షాపథ్‌కి స్వాగతం",
    "Student Login": "విద్యార్థి లాగిన్",
    "Teacher Login": "టీచర్ లాగిన్"
  },
  bn: {
    "Welcome to ShikshaPath": "শিক্ষাপথে স্বাগতম",
    "Student Login": "ছাত্র লগইন",
    "Teacher Login": "শিক্ষক লগইন"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const translate = (text: string): string => {
    return translations[language][text] || text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}