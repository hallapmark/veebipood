import { useNavigate, useParams } from "react-router-dom"
import esindusedDB from "../../data/esindused.json"
import { useState } from "react";

function MuudaEsindus() {
  const { index } = useParams();
  const [shop, setShop] = useState(esindusedDB[index]);
  const navigate = useNavigate();

  function change() {
    if (shop.name === "") {
      alert("Tühja nimega ei saa poodi sisestada!");
      return;
    }
    esindusedDB[index] = shop;
    navigate("/halda-esindused");
  }

  if (shop === undefined) {
    return <div>Esindust ei leitud!</div>
  }  

  return (
    <div>
      <label>Name</label> <br />
      <input defaultValue={shop.name} onChange={(e) => setShop({...shop, name: e.target.value})} type="text" /> <br />
      <label>Telephone</label> <br />
      <input defaultValue={shop.telefon} onChange={(e) => setShop({...shop, telefon: e.target.value})} type="text" /> <br />
      <label>Address</label> <br />
      <input defaultValue={shop.aadress} onChange={(e) => setShop({...shop, aadress: e.target.value})} type="text" /> <br />
      <button onClick={change}>Change</button>
    </div>
  )
}

export default MuudaEsindus