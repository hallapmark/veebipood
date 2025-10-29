import { useState } from "react";

function Autod() {
  const autodAndmebaasist = [
    "Toyota", 
    "Honda", 
    "Ford", 
    "Tesla", 
    "BMW", 
    "Audi", 
    "Mercedes-Benz", 
    "Volkswagen", 
    "Subaru", 
    "Mazda", 
    "Hyundai", 
    "Kia", 
    "Nissan", 
    "Chevrolet", 
    "Volvo"];
  const [autod, setAutod] = useState(autodAndmebaasist);

  function sorteeriAZ() {
    autod.sort((a,b) => a.localeCompare(b));
    setAutod(autod.slice());
  }

  function sorteeriZA() {
    autod.sort((a,b) => b.localeCompare(a));
    setAutod(autod.slice());
  }

  function sorteeriTahemargidKasv() {
    autod.sort((a,b) => a.length - b.length);
    setAutod(autod.slice());
  }

  function sorteeriTahemargidKah() {
    autod.sort((a,b) => b.length - a.length);
    setAutod(autod.slice());
  }

  function sorteeriKolmasTahtAZ() {
    autod.sort((a,b) => a[2].localeCompare(b[2]));
    setAutod(autod.slice());
  }

  function filtreeriKesLoppevadTahegaA() {
    const vastus = autod.filter(auto => auto.endsWith("a"));
    setAutod(vastus);
  }

  function filtreeriKesSisaldavadLyhenditOL() {
    const vastus = autod.filter(auto => auto.includes("ol"));
    setAutod(vastus);
  }

  function filtreeriKesOnPikemadKui7() {
    const vastus = autod.filter(auto => auto.length > 7);
    setAutod(vastus);
  }

  function filtreeriKellelOnTapselt7() {
    const vastus = autod.filter(auto => auto.length === 7);
    setAutod(vastus);
  }

  function filtreeriKellelOnTeineTahtO() {
    const vastus = autod.filter(auto => auto[1] === "o");
    setAutod(vastus);
  }

  function reset() {
    setAutod(autodAndmebaasist);
  }

  return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Kokku autosid: {autod.length} tk</div>

        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärgid kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht AZ</button>
        <button onClick={filtreeriKesLoppevadTahegaA}>Jäta alles A-ga lõppevad</button>
        <button onClick={filtreeriKesSisaldavadLyhenditOL}>Jäta alles lühendit OL sisaldavad</button>
        <button onClick={filtreeriKesOnPikemadKui7}>Jäta alles kes on pikemad kui 7</button>
        <button onClick={filtreeriKellelOnTapselt7}>Jäta alles kellel on täpselt 7 tähte</button>
        <button onClick={filtreeriKellelOnTeineTahtO}>Jäta alles kellel on teine täht O</button>

        {autod.map(auto => 
            <div key={auto}>
                {auto}
            </div>
            // kui keyd poleks, siis re-renderaks uuesti iga kord
        )}
    </div>
  )
}

export default Autod