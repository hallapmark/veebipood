import { useState } from "react";

function Hinnad() {
  const hinnadAndmebaasist = [12, 2, 22, 10, 490, 45, 33, 6, 355, 123]
  const [hinnad, setHinnad] = useState(hinnadAndmebaasist);

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice());
  }

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b - a);
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui30() {
    const vastus = hinnad.filter(hind => hind > 30);
    setHinnad(vastus);
  }

   function filtreeriVaiksemadKui70() {
    const vastus = hinnad.filter(hind => hind < 70);
    setHinnad(vastus);
  }

  function reset() {
    setHinnad(hinnadAndmebaasist);
  }

  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui30}>Jäta alles suuremad kui 30</button>
      <button onClick={filtreeriVaiksemadKui70}>Jäta alles väiksemad kui 70</button>

      <div>Kokku: {hinnad.length} tk</div>
      <button onClick={reset}>Reset</button>

      {hinnad.map(
        (hind) => (
          <div key={hind}>{hind}</div>
        )
        // kui keyd poleks, siis re-renderaks uuesti iga kord
      )}
    </div>
  );
}

export default Hinnad;
