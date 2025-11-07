import { useState } from "react";
import esindusedDB from "../../data/esindused.json";
import { ToastContainer, toast } from "react-toastify";

function LisaEsindus() {

  const [esindus, setEsindus] = useState({"name": "", "telefon": "", "aadress": ""});

  function lisa() {
    esindusedDB.push(esindus);
    toast.success("Esindus lisatud!");
    setEsindus({"name": "", "telefon": "", "aadress": ""});
  }

  function lisaTelefonileSuunakood() {
    if (esindus.telefon.startsWith("+372")) {
      return;
    }
    setEsindus({...esindus, "telefon": "+372" + esindus.telefon});
  }

  return (
    <div>
      <div>Ajutine väljanäitamine: {JSON.stringify(esindus)}</div>
      <label>Nimi</label> <br />
      <input value={esindus.name} onChange={(e) => setEsindus({...esindus, "name": e.target.value})} type="text" /> <br />
      <label>Telefon</label> <br />
      <input value={esindus.telefon} onChange={(e) => setEsindus({...esindus, "telefon": e.target.value})} type="text" /> <br />
      <label>Aadress</label> <br />
      <input value={esindus.aadress} onChange={(e) => setEsindus({...esindus, "aadress": e.target.value})} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <button disabled={esindus.telefon.startsWith("+372")} onClick={lisaTelefonileSuunakood}>Lisa telefonile suunakood</button>

      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  )
}

export default LisaEsindus