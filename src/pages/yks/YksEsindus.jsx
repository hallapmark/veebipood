import { useParams } from "react-router-dom"
import esindusedDB from "../../data/esindused.json"

function YksEsindus() {
  const { keskus } = useParams();
  const leitud = esindusedDB.find(esindus => esindus.name === keskus);

  if (leitud === undefined) {
    return <div>Esindust ei leitud!</div>
  }  

  return (
    <div>
      <div>{leitud.name}</div>
      <div>{leitud.telefon}</div>
      <div>{leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus