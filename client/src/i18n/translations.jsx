import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'; // Import the initReactI18next module
import LanguageDetector from 'i18next-browser-languagedetector';

// Define your translations
const resources = {
    en: {
        translation: {
            login: {
                title: 'Sign in to your account',
                email: 'Email address',
                password: 'Password',
                signIn: 'Sign in',
                forgotPassword: 'Forgot your password?',
            },
        },
    },
    hi: {
        translation: {
            login: {
                title: 'अपने खाते में साइन इन करें',
                email: 'ईमेल पता',
                password: 'पासवर्ड',
                signIn: 'साइन इन करें',
                forgotPassword: 'क्या आपने अपना पासवर्ड भुला दिया?',
            },
        },
    },
    mr: {
        translation: {
            login: {
                title: 'तुमच्या खात्यात साइन इन करा',
                email: 'ईमेल पत्ता',
                password: 'पासवर्ड',
                signIn: 'साइन इन करा',
                forgotPassword: 'तुम्हाला तुमचा पासवर्ड विसरला आहे का?',
            },
        },
    },
};

// Initialize i18next with react-i18next and language detection
i18next
    .use(initReactI18next) // Bind with React
    .use(LanguageDetector) // Language detection
    .init({
        resources,
        fallbackLng: 'en', // Fallback language
        debug: true,
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18next;
