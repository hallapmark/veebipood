import { useNavigate, useParams } from "react-router-dom"
import hinnadDB from "../../data/hinnad.json"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function MuudaHind() {
  const { index } = useParams();
  const [hind, setHind] = useState(hinnadDB[index]);
  const navigate = useNavigate();

  function change() {
    if (hind.nr <= 0) {
      toast.error("Hind ei saa olla negatiivne ega 0!");
      return;
    }
    hinnadDB[index] = hind;
    navigate("/halda-hinnad");
  }

  if (hind === undefined) {
    return <div>Esindust ei leitud!</div>
  }  

  return (
    <div>
      <label>Hind numbrina</label> <br />
      <input defaultValue={hind.nr} onChange={(e) => setHind({...hind, nr: Number(e.target.value)})} type="number" /> <br />
      <label>Hind tekstina</label> <br />
      <input defaultValue={hind.sonana} onChange={(e) => setHind({...hind, sonana: e.target.value})} type="text" /> <br />
      <button onClick={change}>Change</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default MuudaHind