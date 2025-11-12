import { useState } from "react";
import tootedAndmebaasist from "../../data/tooted.json"
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import styles from "../../css/Haldatooted.module.css"

function HaldaTooted() {

  const [tooted, setTooted] = useState(tootedAndmebaasist.slice());

  function kustuta(index) {
    tootedAndmebaasist.splice(index,1);
    setTooted(tootedAndmebaasist.slice());
    toast.success("Toode kustutatud!")
  }

  return (
    <div>
      <h1>Halda tooteid</h1>
      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Toote nimi</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) => 
            <tr key={toode.name}>
              <td>{index+1}</td>
              <td>{toode.name}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
              <td>
                <Link to={`/muuda-toode/${index}`}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default HaldaTooted;
