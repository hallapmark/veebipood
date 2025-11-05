import { useState } from "react";
import autodAndmebaasist from "../../data/autod.json"
import styles from "../../css/Autod.module.css"
import ostukorv from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Autod() {
  const [autod, setAutod] = useState(autodAndmebaasist.slice());

  function sorteeriAZ() {
    autod.sort((a,b) => a.name.localeCompare(b.name));
    setAutod(autod.slice());
  }

  function sorteeriZA() {
    autod.sort((a,b) => b.name.localeCompare(a.name));
    setAutod(autod.slice());
  }

  function sorteeriTahemargidKasv() {
    autod.sort((a,b) => a.name.length - b.name.length);
    setAutod(autod.slice());
  }

  function sorteeriTahemargidKah() {
    autod.sort((a,b) => b.name.length - a.name.length);
    setAutod(autod.slice());
  }

  function sorteeriKolmasTahtAZ() {
    autod.sort((a,b) => a.name[2].localeCompare(b.name[2]));
    setAutod(autod.slice());
  }

  function filtreeriKesLoppevadTahegaA() {
    const vastus = autodAndmebaasist.filter(auto => auto.name.endsWith("a"));
    setAutod(vastus);
  }

  function filtreeriKesSisaldavadLyhenditOL() {
    const vastus = autodAndmebaasist.filter(auto => auto.name.includes("ol"));
    setAutod(vastus);
  }

  function filtreeriKesOnPikemadKui7() {
    const vastus = autodAndmebaasist.filter(auto => auto.name.length > 7);
    setAutod(vastus);
  }

  function filtreeriKellelOnTapselt7() {
    const vastus = autodAndmebaasist.filter(auto => auto.name.length === 7);
    setAutod(vastus);
  }

  function filtreeriKellelOnTeineTahtO() {
    const vastus = autodAndmebaasist.filter(auto => auto.name[1] === "o");
    setAutod(vastus);
  }

  function reset() {
    setAutod(autodAndmebaasist);
  }

  function lisaOstukorvi(auto) {
    ostukorv.push(auto);
    toast.success(auto + " ostukorvi lisatud!");
  }

  function arvutaKokku() {
    let sum = 0;
    autod.forEach(auto => sum += auto.price)
    return sum;
  }

  function otsi(otsing) {
    const vastus = autodAndmebaasist.filter(auto => 
      auto.name.toLowerCase().includes(otsing.toLowerCase()));
    setAutod(vastus);
  }

  return (
    <div>
        <label>Otsi</label>
        <input onChange={(e) => otsi(e.target.value)}type="text" /> <br /><br />

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

        <div className={styles.autod}>
          {autod.map(auto => 
              <div className={styles.auto} key={auto.name}>
                  <h3>{auto.name} - {auto.price}€</h3>
                  <div className={styles.buttonContainer}>
                    <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
                    <Link to={"/auto/" + auto.name}>
                      <button>Vt lähemalt</button>
                    </Link>
                  </div>
              </div>
              // kui keyd poleks, siis re-renderaks uuesti iga kord
          )}
        </div>

        <div>Autode hinnad kokku: {arvutaKokku()} €</div>
        {/* kohe käivitub ilma klikki ootamata */}

        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default Autod