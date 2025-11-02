import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import hinnadAndmebaasist from "../../data/hinnad.json";

function LisaHind() {
  const [hind, setHind] = useState(0);

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
      <label>Hind</label> <br />
      <input onChange={(e) => setHind(e.target.value)} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default LisaHind;
