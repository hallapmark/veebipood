import { useState } from "react"
import tootajadAndmebaasist from "../../data/tootajad.json"
import styles from "../../css/Tootajad.module.css"

function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajadAndmebaasist.slice());
  // nb see on shallow copy  
  // süvakoopiat vist ei tahagi siin? 
  // vt https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
  

  function sorteeriEesnimiAZ() {
    tootajad.sort((a,b) => a.name.localeCompare(b.name));
    setTootajad(tootajad.slice());
  }

  function sorteeriEesnimiZA() {
    tootajad.sort((a,b) => b.name.localeCompare(a.name));
    setTootajad(tootajad.slice());
  }

  function sorteeriPerenimiAZ() {
    tootajad.sort((a,b) => getLastName(a.name).localeCompare(getLastName(b.name)));
    setTootajad(tootajad.slice());
  }

  function sorteeriPerenimiZA() {
    tootajad.sort((a,b) => getLastName(b.name).localeCompare(getLastName(a.name)));
    setTootajad(tootajad.slice());
  }

  function sorteeriT2htedeArvAsc() {
    tootajad.sort((a,b) => a.name.length - b.name.length);
    setTootajad(tootajad.slice());
  }

  function sorteeriT2htedeArvDesc() {
    tootajad.sort((a,b) => b.name.length - a.name.length);
    setTootajad(tootajad.slice());
  }

  function sorteeriTeineTahtAZ() {
    tootajad.sort((a,b) => {
      if (a.name.length >= 2 && b.name.length >= 2) {
        return a.name[1].localeCompare(b.name[1]);
      }
      return 0;
    });
    setTootajad(tootajad.slice());
  }

  function filtreeriKellelOnTapselt3() {
    const vastus = tootajad.filter(tootaja => tootaja.name.length === 3);
    setTootajad(vastus);
  }

  function filtreeriKellelOnYle5() {
    const vastus = tootajad.filter(tootaja => tootaja.name.length > 5);
    setTootajad(vastus);
  }

  function filtreeriAiLyhenditSisaldav() {
    const vastus = tootajad.filter(tootaja => tootaja.name.includes("ai"));
    setTootajad(vastus);
  }

  function filtreeriNeljasi() {
    const vastus = tootajad.filter(tootaja => {
      if (tootaja.name.length >= 4) {
        return tootaja.name[3] === "i"
      }
      return false;
    });
    setTootajad(vastus);
  }

  function filtreeriMTahegaAlgav() {
    const vastus = tootajad.filter(tootaja => tootaja.name[0] === "M");
    setTootajad(vastus);
  }

  function filtreeriPaarisarvTahti() {
    const vastus = tootajad.filter(tootaja => {
      // siin on omapärane  probleemipüstitus, tahame leida need kel terve 
      // nime (eesnimi, perenimi) peale paarisarv tähti.
      // Ei saa teha % 2 === 0 sest loeb space-i täheks. Ei saa teha 
      // % 2 !== 0 kui lubame nimesid milles pole space-i (nagu mõnel pool maailmas 
      // võib juhtuda). Niisiis eemaldame space-id ja siis arvutame.
      const strNoSpaces = tootaja.name.replace(/\s+/g, '');
      return strNoSpaces.length % 2 === 0;
    });
    setTootajad(vastus);
  }

  function filtreeriEzLoppevad() {
    const vastus = tootajad.filter(tootaja => {
      if (tootaja.name.length >= 2) {
        return tootaja.name.slice(-2).toLocaleLowerCase() === "ez";
      }
      return false;
    });
    setTootajad(vastus);
  }

  function reset() {
    setTootajad(tootajadAndmebaasist);
  }

  function getLastName(name) {
    return name.split(" ").slice(-1)[0];
  }

  return (
    <>
      <h1>Töötajad</h1>
      <p>Meil on {tootajadAndmebaasist.length} töötajat</p>
      <button onClick={reset}>Reset</button>
      <h2>Sorteeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <button onClick={sorteeriEesnimiAZ}>Eesnimi AZ</button>
        <button onClick={sorteeriEesnimiZA}>Eesnimi ZA</button>
        <button onClick={sorteeriPerenimiAZ}>Perenimi AZ</button>
        <button onClick={sorteeriPerenimiZA}>Perenimi ZA</button>
      </div>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={sorteeriT2htedeArvAsc}>Tähtede arv kasvavalt</button>
        <button onClick={sorteeriT2htedeArvDesc}>Tähtede arv kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Teine täht AZ</button>
      </div>
      <h2>Filtreeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={filtreeriKellelOnTapselt3}>Täpselt 3 tähte</button>
        <button onClick={filtreeriKellelOnYle5}>Üle 5 tähe</button>
        <button onClick={filtreeriAiLyhenditSisaldav}>"ai" lühendit sisaldavad</button>
        <button onClick={filtreeriNeljasi}>Neljas täht "i"</button>
        <button onClick={filtreeriMTahegaAlgav}>M-iga algav</button>
      </div>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={filtreeriPaarisarvTahti}>Terves nimes paarisarv tähti</button>
        <button onClick={filtreeriEzLoppevad}>Perenimi lõppeb ez-ga</button>
      </div>
      <div className={styles.tootajad}>
        {tootajad.map(tootaja => 
            <div className={styles.tootaja} key={tootaja.name}>
              {tootaja.name}
              <p>{tootaja.email}</p>
            </div>
        )}
      </div>
    </>
  )
}

export default Tootajad