import i18n from "i18next";
import { initReactI18next } from "react-i18next";
<<<<<<< HEAD
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// import translationEN from "../src/locales/en/translation.json";
// import translationFR from "../src/locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
=======

const resources = {
  en: {
    translation: {
      Get_informed: "Get informed!",
      message: "Leave a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message_placeholder: "Message",
      submit: "Submit",
      sending: "Sending...",
      more: "More",
      Medication: "Medication",
      Food: "Food",
      Accomodation: "Accomodation",
      Hygiene: "Hygiene",
      Legal_safety: "Legal & Safety Info",
      More: "More",
      Language_learning: "Language Learning Locations",
      Psychological_help: "Psychological Help",
      Education: "Education",
      Scolarships: "Scholarships",
      Social_activities: "Social and Cultural Activities",
      Sports: "Sports",
      English: "English",
      French: "French",
      dedicated_message:
        "We are dedicated to helping you navigate the resources available in your area. Whether you’re seeking assistance, free food, shelter, or other essential services, you’ve come to the right place. Our goal is to connect you with the help you need, when you need it. Explore our platform, discover local services, and find the support that can make a difference in your life. Together, we can build a stronger community!",
      guiding_message:
        "In every corner, help is near, A guiding light to calm your fear. With open doors and hearts that care, We find the strength to rise and share. Together, we can all be clear. When life feels hard, and hope is thin, Our doors are open, let’s begin. For in the heart, we find the key, To rise as one, to be set free. With every step, together we stand, A world of kindness, hand in hand.",
      Check_Locations: "Check Locations",
      about_us: "About us",
      Terms: "Terms and privacy",
      Feedback: "Feedback and Support",
      rigths: "all rigths reserved",
      locations_here: "locations here",
      More_here: "More here",
    },
  },
  fr: {
    translation: {
      Get_informed: "Soyez informé!",
      message: "Laissez un message",
      name: "Nom",
      email: "Email",
      subject: "Objet",
      message_placeholder: "Message",
      submit: "Soumettre",
      sending: "Envoi...",
      more: "Plus",
      Medication: "Médicaments",
      Food: "Nourriture",
      Accomodation: "Hébergement",
      Hygiene: "Hygiène",
      Legal_safety: "Informations juridiques et de sécurité",
      More: "Plus",
      Language_learning: "Apprentissage des langues",
      Psychological_help: "Aide psychologique",
      Education: "Éducation",
      Scolarships: "Bourses",
      Social_activities: "Activités sociales et culturelles",
      Sports: "Sports",
      English: "Anglais",
      French: "Français",
      dedicated_message:
        "Nous sommes dédiés à vous aider à naviguer parmi les ressources disponibles dans votre région. Que vous cherchiez de l'aide, de la nourriture gratuite, un abri ou d'autres services essentiels, vous êtes au bon endroit. Notre objectif est de vous connecter à l'aide dont vous avez besoin, au moment où vous en avez besoin. Explorez notre plateforme, découvrez les services locaux",
      guiding_message:
        "Dans chaque coin, l'aide est proche, Une lumière guidante pour apaiser ta peur. Avec des portes ouvertes et des cœurs bienveillants, Nous trouvons la force de nous élever et de partager. Ensemble, nous pouvons être clairs. Lorsque la vie semble difficile et que l'espoir est mince, Nos portes sont ouvertes, commençons. Car dans le cœur, nous trouvons la clé, Pour nous lever unis et être libres. À chaque pas, ensemble, nous restons, Un monde de bonté, main dans la main.",
      Check_Locations: "Vérifier les emplacements",
      about_us: "À propos de nous",
      Terms: "Conditions et confidentialité",
      Feedback: "Commentaires et support",
      rigths: " tous droits réservés",
      locations_here: "Emplacements ici",
      More_here: "Plus ici",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  keySeparator: false, // Disable key separator for dot notation
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
>>>>>>> 03a58e05264537992078fe13d346e9f9bd236393
