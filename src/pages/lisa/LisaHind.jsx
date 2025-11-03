import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import hinnadAndmebaasist from "../../data/hinnad.json";

function LisaHind() {
  const [hind, setHind] = useState({});

  function lisa() {
    if (hind <= 0) {
        toast.error("Negatiivset hinda ei saa lisada!");
        return;
    }
    hinnadAndmebaasist.push(hind);
    toast.success("Hind lisatud!");
  }

  return (
    <div>
      <div>Ajutine väljanäitamine: {JSON.stringify(hind)}</div>
      <label>Hind</label> <br />
      <input onChange={(e) => setHind({...hind, "nr": Number(e.target.value)})} type="number" /> <br />
      <label>Hind sonana</label> <br />
      <input onChange={(e) => setHind({...hind, "sonana": e.target.value})} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default LisaHind;
