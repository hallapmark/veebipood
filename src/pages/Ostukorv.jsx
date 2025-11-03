import { useState } from "react";
import ostukorv from "../data/ostukorv.json";

function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorv.slice());

  function kustuta(index) {
    ostukorv.splice(index,1);
    setTooted(ostukorv.slice());
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
