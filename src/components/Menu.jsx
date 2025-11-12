import { Link } from "react-router-dom"
import halloween from "../assets/undraw_halloween-2025_o47f.svg"
import { useTranslation } from 'react-i18next';
import english from "../assets/english.png"
import estonian from "../assets/estonian.png"
import { useEffect } from "react";

function Menu() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("languageHasBeenManuallySet") === "true") {
      return;
    }
    let detectedLang = navigator.language;
    if (detectedLang.toLowerCase().includes("en-")) {
      detectedLang = "en" // Simplify English-language locales to one catch-all English-language locale
    }
    i18n.changeLanguage(detectedLang);
    localStorage.setItem("keel", detectedLang);
    console.log("Set detected language " + detectedLang);
  }, [i18n])


  function updateLanguage(newLang) {
    i18n.changeLanguage(newLang);
    localStorage.setItem("keel", newLang);
    localStorage.setItem("languageHasBeenManuallySet", "true")
  }

  return (
    <div>
      <Link to="/">
         <img className="pilt" src={halloween} alt="" />
      </Link>

      {/* <Link to="/esindused">
        <button>Esindused</button>
      </Link> */}

      <Link to="/osta-kinkekaart">
        <button>{t("nav.gift-card")}</button>
      </Link>

      <Link to="/ostukorv">
        <button>{t("nav.cart")}</button>
      </Link>

      <Link to="/seaded">
        <button>{t("nav.settings")}</button>
      </Link>

      <Link to="/kalkulaator">
        <button>{t("nav.calculator")}</button>
      </Link>

      <Link to="arrays-home">
        <button>Arrays</button>
      </Link>

      <Link to="/halda-home">
        <button>{t("nav.manage")}</button>
      </Link>

      <Link to="/lisa-home">
        <button>{t("nav.add")}</button>
      </Link>

      <img className="icon" onClick={() => updateLanguage("en")} src={english} alt="" />
      <img className="icon" onClick={() => updateLanguage("et")} src={estonian} alt="" />
    </div>
  )
}

export default Menu