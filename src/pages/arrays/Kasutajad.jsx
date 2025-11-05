import { useState } from "react"
import kasutajadDB from "../../data/kasutajad.json"
import styles from "../../css/Kasutajad.module.css"
import { Link } from "react-router-dom";

function Kasutajad() {

  const [kasutajad, setKasutajad] = useState(kasutajadDB.slice());

  function sorteeriPerenimiAZ() {
    kasutajad.sort((a,b) => getLastName(a.name).localeCompare(getLastName(b.name)));
    setKasutajad(kasutajad.slice());
  }

  function sorteeriPerenimiZA() {
    kasutajad.sort((a,b) => getLastName(b.name).localeCompare(getLastName(a.name)));
    setKasutajad(kasutajad.slice());
  }

  function sorteeriEesnimiAZ() {
    kasutajad.sort((a,b) => a.name.localeCompare(b.name));
    setKasutajad(kasutajad.slice());
  }

  function sorteeriEesnimiZA() {
    kasutajad.sort((a,b) => b.name.localeCompare(a.name));
    setKasutajad(kasutajad.slice());
  }

  function getLastName(name) {
    return name.split(" ").slice(-1)[0];
  }

  function ule11Tahe() {
    const vastus = kasutajad.filter((kasutaja) => {
      const nameNoSpaces = kasutaja.name.replace(/\s+/g, '');
      return nameNoSpaces.length > 11;
    })
    setKasutajad(vastus);
  }

  function perenimiAlgabTa() {
    // manuaalne implementatsioon
    // tulevikus saan kasutada .startsWith()
    const vastus = kasutajad.filter((kasutaja) => {
      const lastName = getLastName(kasutaja.name);
      if (lastName.length < 2) {
        return false
      }
      const firstTwo = lastName.slice(0,2).toLocaleLowerCase();
      return firstTwo === "ta";
    })
    setKasutajad(vastus);
  }

  function reset() {
    setKasutajad(kasutajadDB);
  }
  
  return (
    <div>
      <h1>Kasutajad</h1>
      <p>Andmebaasis on {kasutajadDB.length} kasutajat</p>

      <button onClick={reset}>Reset</button>

      <h2>Sorteeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <button onClick={sorteeriPerenimiAZ}>Perenimi AZ</button>
        <button onClick={sorteeriPerenimiZA}>Perenimi ZA</button>
        <button onClick={sorteeriEesnimiAZ}>Eesnimi AZ</button>
        <button onClick={sorteeriEesnimiZA}>Eesnimi ZA</button>
      </div>

      <h2>Filtreeri</h2>
      <div style = {{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <button onClick={ule11Tahe}>Üle 11 tähe</button>
        <button onClick={perenimiAlgabTa}>Perenimi algab "Ta"</button>
      </div>

      <div className={styles.kasutajad}>
        {kasutajad.map((kasutaja) =>
          <div className={styles.kasutaja} key={kasutaja.name}>
            <h3>{kasutaja.name}</h3>
            <p>{kasutaja.email}</p>
            <Link to={"/kasutaja/" + kasutaja.name}>
              <button>Kasutaja profiil</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Kasutajad