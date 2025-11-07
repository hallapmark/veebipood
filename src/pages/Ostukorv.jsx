import { useState } from "react";

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

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
      {tooted.map((toode, index) => 
        <div key={toode.name}>
          {toode.name} {toode.price}
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}

      <div>Toodete kogusumma: {arvutakokku()} €</div>
    </div>
  );
}

export default Ostukorv;
