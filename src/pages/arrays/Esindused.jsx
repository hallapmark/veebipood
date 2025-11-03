import { useState } from "react"
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState(esindusedFailist.slice());

  function sorteeriAZ() {
    esindused.sort((a,b) => a.name.localeCompare(b.name));
    setEsindused(esindused.slice());
  }

  function sorteeriZA() {
    esindused.sort((a,b) => b.name.localeCompare(a.name));
    setEsindused(esindused.slice());
  }

  function sorteeriAadrAZ() {
    esindused.sort((a,b) => a.aadress.localeCompare(b.aadress));
    setEsindused(esindused.slice());
  }

  function sorteeriAadrZA() {
    esindused.sort((a,b) => b.aadress.localeCompare(a.aadress));
    setEsindused(esindused.slice());
  }

  function arvutaKokku() {
    let sum = 0;
    esindused.forEach(esindus => sum += esindus.name.length)
    return sum;
  }

  function otsi(otsing) {
    const vastus = esindusedFailist.filter(esindus => esindus.name.includes(otsing));
    setEsindused(vastus);
  }

  return (
    <div>
        <label>Otsi</label>
        <input onChange={(e) => otsi(e.target.value)}type="text" /> <br /><br />
        
        <button className={linn == "tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("tallinn")}>Tallinn</button>
        <button className={linn == "tartu" ? "linn-aktiivne" : undefined}onClick={() => setLinn("tartu")}>Tartu</button>
        <button className={linn == "narva" ? "linn-aktiivne" : undefined}onClick={() => setLinn("narva")}>Narva</button>
        <button className={linn == "pärnu" ? "linn-aktiivne" : undefined}onClick={() => setLinn("pärnu")}>Pärnu</button>
        <div>Hetkel aktiivne linn: {linn}</div> 
        <br />
        {linn === "tallinn" && 
          <>
            <button onClick={sorteeriAZ}>Sorteeri nimi AZ</button>
            <button onClick={sorteeriZA}>Sorteeri nimi ZA</button>
            <button onClick={sorteeriAadrAZ}>Sorteeri aadress AZ</button>
            <button onClick={sorteeriAadrZA}>Sorteeri aadress ZA</button>
            {esindused.map(esindus =>
              <div key={esindus.name}>
                {esindus.name} ({esindus.aadress})
                <Link to={"/esindus/" + esindus.name}>
                  <button>Vt lähemalt</button>
                </Link> 
              </div>
            )}
          </>
        }
        {linn === "tartu" && 
          <>
            <div>Raatuse</div>
            <div>Lõunakeskus</div>
          </>
        }
        {linn === "narva" && <div>Fama</div>}
        {linn === "pärnu" && <div>Port Artur 2</div>}
        <div>Esinduste nimede pikkused kokku: {arvutaKokku()}</div>
    </div>
  )
} // {linn} see on sisemine muutuja, mida otseselt ei kuvata tegelikult

export default Esindused