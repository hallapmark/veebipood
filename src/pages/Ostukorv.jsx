import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const { t } = useTranslation();
  const [parcelMachines, setParcelMachines] = useState([]); // HTMLs
  const [dbParcelMachines, setDbParcelMachines] = useState([]); // 1395 siin
  const [country, setCountry] = useState("EE");

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
      })
  }, []);

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

  function searchForPMs(searched) {
    const result = dbParcelMachines.filter(pm => pm.NAME.includes(searched));
    setParcelMachines(result);
  }

  function pay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const body = {
      "account_name": "EUR3D1",
      "nonce": "165782ab681fkn" + new Date() + Math.random() * 9999,
      "timestamp": new Date(),
      "amount": arvutakokku() / 1000, /// 7000 on limiit!!!
      "order_reference": "840as" + Math.random() * 9999,
      "customer_url": "https://err.ee",
      "api_username": "e36eb40f5ec87fa2"
    }; // sisu

    // testkonto andmed
    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }; // kasutajanimi+parool

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers
    })
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link)
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

      {tooted.length > 0 &&
      <>
        <div>{t("cart.total")}: {arvutakokku()} €</div>
        <button onClick={() => setCountry("EE")}>Eesti</button>
        <button onClick={() => setCountry("LV")}>Läti</button>
        <button onClick={() => setCountry("LT")}>Leedu</button>
        <br />
        <label>Otsi</label>
        <input onChange={(e) => searchForPMs(e.target.value)} type="text"></input>
        <br />
        <select>
          {parcelMachines
          .filter(pm => pm.A0_NAME === country)
          .map(pm => 
            <option key={pm.ZIP}>
              {pm.NAME}
            </option>
          )}
        </select>
      </>
      }
      <button onClick={pay}>Maksa</button>
    </div>
  );
}

export default Ostukorv;

// https://omniva.ee/locations.json 
// pakiautomaadid