import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "nav": {
        "gift-card": "Gift card",
        "cart": "Cart",
        "settings": "Settings",
        "calculator": "Calculator",
        "manage": "Manage",
        "add": "Add",
        "api": "Api calls",
      }, 
      "cart": {
        "empty-text": "Cart is empty",
        "empty-button": "Empty cart",
        "total": "Total of the cart"
      }
    }
  },
  et: {
    translation: {
      "nav": {
        "gift-card": "Kinkekaart",
        "cart": "Ostukorv",
        "settings": "Seaded",
        "calculator": "Kalkulaator",
        "manage": "Halda",
        "add": "Lisa",
        "api": "Api päringud",
      },
      "cart": {
        "empty-text": "Ostukorv on tühi",
        "empty-button": "Tühenda ostukorv",
        "total": "Ostukorvi kogusumma"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  function getLanguage() {
    if (localStorage.getItem("keel") === null || !Object.keys(resources).includes(localStorage.getItem("keel"))) {
      localStorage.setItem("keel", "et");
      return "et";
    }
    return localStorage.getItem("keel");
  }

  export default i18n;