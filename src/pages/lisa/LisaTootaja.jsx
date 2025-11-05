import { useState } from "react";
import tootajadAndmebaasist from "../../data/tootajad.json";
import { ToastContainer, toast } from "react-toastify";

function LisaTootaja() {
  // teine variant useRef(), mis html-is input kylge
  const [tootajaNimi, setTootajaNimi] = useState("");
  const [tootajaEmail, setTootajaEmail] = useState("");

  function lisa() {
    if (tootajaEmail.includes("@") === false) {
      toast.error("Email pole õigel kujul!");
      return;
    } 

    if (tootajaEmail.length < 7) {
      toast.error("Email liiga lühike!");
      return;
    }

    if (tootajaNimi.length < 2) {
      toast.error("Nimi liiga lühike!");
      return;
    } 
    
    tootajadAndmebaasist.push({
      name: tootajaNimi,
      email: tootajaEmail
    });
    toast.success("Töötaja lisatud!");
  }

  return (
    <div>
      <div style = {{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <label>Nimi</label>
        <input onChange={(e) => setTootajaNimi(e.target.value)} type="text" />
        <label>Email</label>
        <input onChange={(e) => setTootajaEmail(e.target.value)} type="text" />
      </div>
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" tootajaClose={4000} theme="dark" />
    </div>
  );
}

export default LisaTootaja;
