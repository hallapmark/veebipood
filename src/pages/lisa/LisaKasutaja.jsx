import kasutajadDB from "../../data/kasutajad.json"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

function LisaKasutaja() {
  const [name, setNimi] = useState("");
  const [email, setEmail] = useState("");

  function add() {
    if (name.length < 2) {
      toast.error("Nimi on liiga lühike!");
      return;
    }

    if (email.length < 7) {
      toast.error("Email on liiga lühike!");
      return;
    }

    if (email.includes("@") === false) {
      toast.error("Email pole õigel kujul!");
      return;
    }

    kasutajadDB.push({
      name: name,
      email: email
    });

    toast.success("Kasutaja lisatud!")
  }

  return (
    <div>
      <h1>Lisa Kasutaja</h1>
      <div style = {{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div>
          <label>Nimi</label>
          <input onChange={(e) => setNimi(e.target.value)} type="text" />
        </div>
        <div>
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        <button onClick={add}>Lisa</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LisaKasutaja