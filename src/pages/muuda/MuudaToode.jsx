import { useNavigate, useParams } from "react-router-dom"
import tooteDB from "../../data/tooted.json"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function MuudaToode() {
  const { index } = useParams();
  const [toode, setToode] = useState(tooteDB[index]);
  const navigate = useNavigate(); 

  function update() {
    if (toode.name.length < 2) {
      toast.error("Toote nimi on liiga lühike!");
      return;
    }

    tooteDB[index] = toode;
    navigate("/halda-tooted");
  }

  if (toode === undefined) {
    return <div>Toodet ei leitud!</div>
  }  

  return (
    <div>
      <label>Name</label> <br />
      <input defaultValue={toode.name} onChange={(e) => setToode({...toode, name: e.target.value})} type="text" /> <br />
      <label>Description (en)</label> <br />
      <input defaultValue={toode.description} onChange={(e) => setToode({...toode, description: e.target.value})} type="text" /> <br />
      <label>Description (est)</label> <br />
      <input defaultValue={toode.description_est} onChange={(e) => setToode({...toode, description_est: e.target.value})} type="text" /> <br />
      <label>Price</label> <br />
      <input defaultValue={toode.price} onChange={(e) => setToode({...toode, price: Number(e.target.value)})} type="number" /> <br />
      <button onClick={update}>Change</button>

      <ToastContainer
        position="bottom-right"
        toodeClose={4000}
        theme="dark"
      />
      
    </div>
  )
}

export default MuudaToode