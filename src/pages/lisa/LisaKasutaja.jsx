import tootajadDB from "../../data/tootajad.json"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

function LisaKasutaja() {
  const [nimi, setNimi] = useState("");
  const [email, setEmail] = useState("");

  function lisa() {
    if (nimi.length < 2) {
      toast.error("Nimi on liiga lühike!");
    }

    if (email.length < 7) {
      toast.error("Email on liiga lühike!");
    }

    if (email.includes("@") === false) {
      toast.error("Email pole õigel kujul!");
    }

    tootajadDB.push({
      name: nimi,
      email: email
    });

    toast.success("Kasutaja lisatud!")
  }

  return (
    <div>
      <h1>Lisa Kasutaja</h1>
      <div style = {{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <label>Nimi</label>
        <input onChange={(e) => setNimi(e.target.value)} type="text" />
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
    </div>
  )
}

export default LisaKasutaja