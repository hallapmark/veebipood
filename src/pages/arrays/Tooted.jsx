import { useState } from "react"
import tootedAndmebaasist from "../../data/tooted.json"
import styles from "../../css/Tooted.module.css"
import ostukorv from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Tooted() {
  const [tooted, setTooted] = useState(tootedAndmebaasist.slice());

  function sorteeriAZ() {
    tooted.sort((a,b) => a.name.localeCompare(b.name));
    setTooted(tooted.slice());
  }

  function sorteeriZA() {
    tooted.sort((a,b) => b.name.localeCompare(a.name));
    setTooted(tooted.slice());
  }

  function sorteeriT2htedeArvAsc() {
    tooted.sort((a,b) => a.name.length - b.name.length);
    setTooted(tooted.slice());
  }

  function sorteeriT2htedeArvDesc() {
    tooted.sort((a,b) => b.name.length - a.name.length);
    setTooted(tooted.slice());
  }

  function sorteeriTeineTahtAZ() {
    tooted.sort((a,b) => {
      if (a.name.length >= 2 && b.name.length >= 2) {
        return a.name[1].localeCompare(b.name[1]);
      }
      return 0;
    });
    setTooted(tooted.slice());
  }

  function filtreeriMillelOnTapselt6() {
    const vastus = tooted.filter(toode => toode.name.length === 6);
    setTooted(vastus);
  }

  function filtreeriMillelOnKuni6() {
    const vastus = tooted.filter(toode => toode.name.length <= 6);
    setTooted(vastus);
  }

  function filtreeriViimaneA() {
    const vastus = tooted.filter(toode => toode[toode.length - 1].toLocaleLowerCase() === "a");
    setTooted(vastus);
  }

  function filtreeriViimaneY() {
    const vastus = tooted.filter(toode => toode[toode.length - 1].toLocaleLowerCase() === "y");
    setTooted(vastus);
  }

  function filtreeriPaarisarvTahti() {
    const vastus = tooted.filter(toode => {
      const strNoSpaces = toode.name.replace(/\s+/g, '');
      return strNoSpaces.length % 2 === 0;
    });
    setTooted(vastus);
  }

  function lisaOstukorvi(toode) {
    ostukorv.push(toode);
    toast.success(toode.name + "ostukorvi lisatud!");
  }

  function reset() {
    setTooted(tootedAndmebaasist);
  }

  return (
    <>
      <h1>Tooted</h1>
      <p>Meil on {tootedAndmebaasist.length} toodet</p>
      <button onClick={reset}>Reset</button>
      <h2>Sorteeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <button onClick={sorteeriAZ}>AZ</button>
        <button onClick={sorteeriZA}>ZA</button>
        <button onClick={sorteeriT2htedeArvAsc}>Tähtede arv kasvavalt</button>
        <button onClick={sorteeriT2htedeArvDesc}>Tähtede arv kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Teine täht AZ</button>
      </div>
      <h2>Filtreeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={filtreeriMillelOnTapselt6}>Täpselt 6 tähte</button>
        <button onClick={filtreeriMillelOnKuni6}>Kuni 6 tähte</button>
        <button onClick={filtreeriViimaneA}>Viimane täht "a"</button>
        <button onClick={filtreeriViimaneY}>Viimane täht "y"</button>
      </div>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={filtreeriPaarisarvTahti}>Terves tootenimes paarisarv tähti</button>
      </div>

      <p>Kuvatud on {tooted.length} toodet</p>

      <div>
        {tooted.map(toode => 
          <div key={toode.name} style={{display: "flex"}}>
            <div className={styles.toode}>
              <h3>{toode.name}</h3>
              <p>{toode.description_est}</p>
              <p>{toode.price}€</p>
              <Link to={`/toode/${toode.name}`}>
                <button>Vaata lähemalt</button>
              </Link>
            </div>
            <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </>
  )
}

export default Tooted