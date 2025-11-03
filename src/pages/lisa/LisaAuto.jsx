import { useState } from "react";
import autodAndmebaasist from "../../data/autod.json";
import { ToastContainer, toast } from "react-toastify";

function LisaAuto() {
  // teine variant useRef(), mis html-is input kylge
  const [auto, setAuto] = useState({});

  function lisa() {
    // ref.current.value, mille lisan autodAndmebaasist
    // mitterefiga variant rohkem kasutatav 
    autodAndmebaasist.push(auto);
    toast.success("Toode lisatud!");
  }

  return (
    <div>
      <div>Ajutine väljanäitamine: {JSON.stringify(auto)}</div>
      <label>Nimi</label> <br />
      <input onChange={(e) => setAuto({...auto, "name": e.target.value})} type="text" /> <br />
      <label>Hind</label> <br />
      <input onChange={(e) => setAuto({...auto, "price": Number(e.target.value)})} type="number" /> <br />
      <label>Aktiivne</label> <br />
      <input onChange={(e) => setAuto({...auto, "active": e.target.checked})} type="checkbox" /> <br />
      <label>Pilt</label> <br />
      <input onChange={(e) => setAuto({...auto, "image": e.target.value})} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default LisaAuto;
