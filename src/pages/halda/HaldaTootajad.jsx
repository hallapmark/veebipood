import { useState } from "react";
import tootajadAndmebaasist from "../../data/tootajad.json"
// import styles from "../../css/HaldaTootajad.module.css"

function HaldaTootajad() {

  const [tootajad, setTootajad] = useState(tootajadAndmebaasist.slice());

  function kustuta(index) {
    tootajadAndmebaasist.splice(index,1);
    setTootajad(tootajadAndmebaasist.slice());
  }

  return (
    <div>
      <h1>Halda töötajaid</h1>
      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Nimi</th>
            <th>Email</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) => 
            <tr key={tootaja.name}>
              <td>{index+1}</td>
              <td>{tootaja.name}</td>
              <td>{tootaja.email}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HaldaTootajad;
