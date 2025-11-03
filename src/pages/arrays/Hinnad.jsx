import { useState } from "react";
import hinnadAndmebaasist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadAndmebaasist.slice());

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a.nr - b.nr);
    setHinnad(hinnad.slice());
  }

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b.nr - a.nr);
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui30() {
    const vastus = hinnad.filter(hind => hind.nr > 30);
    setHinnad(vastus);
  }

   function filtreeriVaiksemadKui70() {
    const vastus = hinnad.filter(hind => hind.nr < 70);
    setHinnad(vastus);
  }

  function arvutaKokku() {
    let sum = 0;
    hinnad.forEach(hind => sum += hind.nr)
    return sum;
  }

  function reset() {
    setHinnad(hinnadAndmebaasist);
  }

  function otsi(otsing) {
    const vastus = hinnadAndmebaasist.filter(hind => hind.nr.toString().includes(otsing));
    setHinnad(vastus);
  }

  return (
    <div>
      <h1>Hinnad</h1>
      <label>Otsi</label>
      <input onChange={(e) => otsi(e.target.value)} type="number" /> <br /><br />
      
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui30}>Jäta alles suuremad kui 30</button>
      <button onClick={filtreeriVaiksemadKui70}>Jäta alles väiksemad kui 70</button>

      <div>Kokku: {hinnad.length} tk</div>
      <button onClick={reset}>Reset</button>

      {hinnad.map(
        (hind) => (
          <div key={hind.nr}>
            {hind.nr} {hind.sonana}
            <Link to={"/hind/" + hind.nr}>
              <button>Vt lähemalt</button>
            </Link> 
          </div>
        )
        // kui keyd poleks, siis re-renderaks uuesti iga kord
      )}
      <div>Hinnad kokku: {arvutaKokku()} €</div>
    </div>
  );
}

export default Hinnad;
