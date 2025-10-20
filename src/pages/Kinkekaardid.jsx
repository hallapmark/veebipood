import { useState } from "react";

function Kinkekaardid() {
  const [summa, setSumma] = useState(20); // muudab automaatselt html-i ka

  return (
    <div>
      <button onClick={() => setSumma(20)}>20€</button>
      <button onClick={() => setSumma(50)}>50€</button>
      <button onClick={() => setSumma(100)}>100€</button>

      <div>Kinkekaart {summa} €</div>
    </div>
  );
}

export default Kinkekaardid;
