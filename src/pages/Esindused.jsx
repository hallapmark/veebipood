import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
        <button onClick={() => setLinn("tallinn")}>Tallinn</button>
        <button onClick={() => setLinn("tartu")}>Tartu</button>
        <button onClick={() => setLinn("narva")}>Narva</button>
        <button onClick={() => setLinn("pärnu")}>Pärnu</button>
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