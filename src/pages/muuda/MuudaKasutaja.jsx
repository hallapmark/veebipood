import { useState } from "react"
import kasutajadDB from "../../data/kasutajad.json"
import { useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

function MuudaKasutaja() {
  const { index } = useParams();
  const [kasutaja, setKasutaja] = useState(kasutajadDB[index]);
  const navigate = useNavigate(); 

  const update = () => {
    if (kasutaja.name.length < 2) {
      toast.error("The user name must have at least 2 characters");
      return;
    }
    if (kasutaja.email.length < 7) {
      toast.error("The user email is too short");
      return;
    }
    if (!(kasutaja.email.includes("@"))) {
      toast.error("The user email is too short");
      return;
    }
    kasutajadDB[index] = kasutaja;
    navigate("/halda-kasutajad")
  }

  return (
    <div>
      <label>Name</label> <br />
      <input type="text" defaultValue={kasutaja.name} onChange={(e) => setKasutaja({...kasutaja, name: e.target.value})} /> <br />
      <label>Email</label> <br />
      <input type="text" defaultValue={kasutaja.email} onChange={(e) => setKasutaja({...kasutaja, email: e.target.value})} /> <br />
      <button onClick={update}>Change</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default MuudaKasutaja