import { useState } from "react";
import tootedAndmebaasist from "../../data/tooted.json";
import { ToastContainer, toast } from "react-toastify";

function LisaToode() {
  // teine variant useRef(), mis html-is input kylge
  const [tooteNimi, setTooteNimi] = useState("");
  const [tooteKirjeldus, setTooteKirjeldus] = useState("");
  const [tooteKirjeldusEst, setTooteKirjeldusEst] = useState("");
  const [hind, setHind] = useState("");

  function lisa() {
    if (tooteNimi.length < 3) {
      toast.error("Toote nimi liiga lühike!");
      return;
    } 

    if (tooteKirjeldus.length < 5) {
      toast.error("Toote kirjeldus liiga lühike!");
      return;
    }

    if (tooteKirjeldusEst.length < 5) {
      toast.error("Toote eestikeelne kirjeldus liiga lühike!");
      return;
    }

    if (hind <= 0) {
      toast.error("Tootel peab olema hind.")
      return;
    }

    tootedAndmebaasist.push({
      name: tooteNimi,
      description: tooteKirjeldus,
      description_est: tooteKirjeldusEst,
      price: hind
    });
    toast.success("toode lisatud!");
  }

  return (
    <div>
      <div style = {{ alignItems: "center", justifyContent: "center" }}>
        <label>Toote nimi</label> <br />
        <input onChange={(e) => setTooteNimi(e.target.value)} type="text" /> <br /> <br />
        <label>Tootekirjeldus (inglise k.)</label> <br />
        <input onChange={(e) => setTooteKirjeldus(e.target.value)} type="text" /> <br /> <br />
        <label>Tootekirjeldus (eesti k.)</label> <br />
        <input onChange={(e) => setTooteKirjeldusEst(e.target.value)} type="text" /> <br /> <br />
        <label>Hind (eur)</label> <br />
        <input onChange={(e) => setHind(e.target.value)} type="number" /> <br /> <br />
      </div>
      <button onClick={lisa}>Lisa</button>
      <ToastContainer position="bottom-right" toodeClose={4000} theme="dark" />
    </div>
  );
}

export default LisaToode;
