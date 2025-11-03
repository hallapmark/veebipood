import { useParams } from "react-router-dom"
import esindusedDB from "../../data/esindused.json"

function MuudaEsindus() {
  const { index } = useParams();
  const leitud = esindusedDB[index];

  if (leitud === undefined) {
    return <div>Esindust ei leitud!</div>
  }  

  return (
    <div>
      <input defaultValue={leitud.name} type="text" /> <br />
      <input defaultValue={leitud.telefon} type="text" /> <br />
      <input defaultValue={leitud.aadress} type="text" /> <br />
    </div>
  )
}

export default MuudaEsindus