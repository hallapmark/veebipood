import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
        <button className={linn == "tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("tallinn")}>Tallinn</button>
        <button className={linn == "tartu" ? "linn-aktiivne" : undefined}onClick={() => setLinn("tartu")}>Tartu</button>
        <button className={linn == "narva" ? "linn-aktiivne" : undefined}onClick={() => setLinn("narva")}>Narva</button>
        <button className={linn == "pärnu" ? "linn-aktiivne" : undefined}onClick={() => setLinn("pärnu")}>Pärnu</button>
        <div>Hetkel aktiivne linn: {linn}</div> 
        <br />
        {linn === "tallinn" && 
          <>
            <div>Ülemiste</div>
            <div>Rocca al mare</div>
            <div>Magistrali</div>
            <div>Vesse</div>
            <div>Kristiine</div>
            <div>Järveotsa</div>
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
    </div>
  )
} // {linn} see on sisemine muutuja, mida otseselt ei kuvata tegelikult

export default Esindused