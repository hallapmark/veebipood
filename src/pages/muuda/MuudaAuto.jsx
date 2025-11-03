import { useParams } from "react-router-dom"
import autoDB from "../../data/autod.json"

function MuudaAuto() {
  const { index } = useParams();
  const leitud = autoDB[index];

  if (leitud === undefined) {
    return <div>Autot ei leitud!</div>
  }  

  return (
    <div>
      <input defaultValue={leitud.name} type="text" /> <br />
      <input defaultValue={leitud.price} type="text" /> <br />
      <input defaultValue={leitud.active} type="text" /> <br />
      <input defaultValue={leitud.image} type="text" /> <br />
    </div>
  )
}

export default MuudaAuto