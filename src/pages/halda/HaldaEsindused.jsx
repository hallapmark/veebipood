import { useState } from "react";
import esindusedDB from "../../data/esindused.json"
import { Link } from "react-router-dom";
// import styles from "../../css/HaldaEsindused.module.css"

function HaldaEsindused() {

  const [esindused, setEsindused] = useState(esindusedDB.slice());

  function kustuta(index) {
    esindusedDB.splice(index,1);
    setEsindused(esindusedDB.slice());
  }
  // kustutada saab javascriptis ainult indexiga

  return (
    <div>
      <h1>Halda esindusi</h1>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Järjekorranumber</th>
            <th>Esinduse nimi</th>
            <th>Esinduse telefon</th>
            <th>Esinduse aadress</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
            <tr key={esindus.name}>
              <td>{index}</td>
              <td>{index+1}</td>
              <td>{esindus.name}</td>
              <td>{esindus.telefon}</td>
              <td>{esindus.aadress}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
              <td>
                <Link to={"/muuda-esindus/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HaldaEsindused;
