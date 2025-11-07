import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const { t } = useTranslation();

  function tyhjenda() {
    setTooted([]);
    localStorage.setItem("ostukorv", "[]");
    // localStorage.setItem("ostukorv", JSON.stringify([]));   alternatiiv
  }

  function kustuta(index) {
    tooted.splice(index,1);
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
    setTooted(tooted.slice());
  }

  function arvutakokku() {
    let summa = 0;
    tooted.forEach(toode => summa += toode.price);
    return summa
  }

  return (
    <div>
      {tooted.length === 0 && <div>{t("cart.empty-text")}</div>}
      {tooted.length > 0 && 
        <button onClick={tyhjenda}>{t("cart.empty-button")}</button>
      }

      {tooted.map((toode, index) => 
        <div key={toode.name}>
          {toode.name} {toode.price}
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}

      <div>{t("cart.total")}: {arvutakokku()} €</div>
    </div>
  );
}

export default Ostukorv;
