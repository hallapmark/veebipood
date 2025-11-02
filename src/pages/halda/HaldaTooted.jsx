import { useState } from "react";
import tootedAndmebaasist from "../../data/tooted.json"
import { ToastContainer, toast } from "react-toastify";
// import styles from "../../css/Haldatooted.module.css"

function HaldaTooted() {

  const [tooded, setTooted] = useState(tootedAndmebaasist.slice());

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
          {tooded.map((toode, index) => 
            <tr key={toode.name}>
              <td>{index+1}</td>
              <td>{toode.name}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
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
