
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      todo: 'Todo',
      dueIn: 'Due in',
      days: 'days',
      toggleLanguage: 'Toggle Language',
    },
  },
  vn: {
    translation: {
      todo: 'Công việc',
      dueIn: 'Hết hạn trong',
      days: 'ngày',
      toggleLanguage: 'Chuyển ngôn ngữ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation not found
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
