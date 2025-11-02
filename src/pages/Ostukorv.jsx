import { useState } from "react";
import ostukorv from "../data/ostukorv.json";

function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorv.slice());

  function kustuta(index) {
    ostukorv.splice(index,1);
    setTooted(ostukorv.slice());
  }

  return (
    <div>
      {tooted.map((toode, index) => 
        <div key={toode}>
          {toode}
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}
    </div>
  );
}

export default Ostukorv;
