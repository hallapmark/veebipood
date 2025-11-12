import { useState } from "react"
import tootajadDB from "../../data/tootajad.json"
import { useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

function MuudaTootaja() {
  const { index } = useParams();
  const [tootaja, setTootaja] = useState(tootajadDB[index]);
  const navigate = useNavigate(); 

  const update = () => {
    if (tootaja.name.length < 2) {
      toast.error("The employee name must have at least 2 characters");
      return;
    }
    if (tootaja.email.length < 7) {
      toast.error("The employee email is too short");
      return;
    }
    if (!(tootaja.email.includes("@"))) {
      toast.error("The employee email is too short");
      return;
    }
    tootajadDB[index] = tootaja;
    navigate("/halda-tootajad")
  }

  return (
    <div>
      <label>Name</label> <br />
      <input type="text" defaultValue={tootaja.name} onChange={(e) => setTootaja({...tootaja, name: e.target.value})} /> <br />
      <label>Email</label> <br />
      <input type="text" defaultValue={tootaja.email} onChange={(e) => setTootaja({...tootaja, email: e.target.value})} /> <br />
      <button onClick={update}>Change</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default MuudaTootaja