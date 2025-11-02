import { useState } from "react";
import autodAndmebaasist from "../../data/autod.json";
import { ToastContainer, toast } from "react-toastify";

function LisaAuto() {
  // teine variant useRef(), mis html-is input kylge
  const [auto, setAuto] = useState("");

  function lisa() {
    // ref.current.value, mille lisan autodAndmebaasist
    // mitterefiga variant rohkem kasutatav 
    autodAndmebaasist.push(auto);
    toast.success("Toode lisatud!");
  }

  return (
    <div>
      <label>Nimi</label> <br />
      <input onChange={(e) => setAuto(e.target.value)} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default LisaAuto;
