import { useParams } from "react-router-dom"
import autoDB from "../../data/autod.json"

function YksAuto() {
  const { nimi } = useParams();
  const leitud = autoDB.find(auto => auto.name === nimi);

  if (leitud === undefined) {
    return <div>Autot ei leitud!</div>
  }  

  return (
    <div>
      <div>{leitud.name}</div>
      <div>{leitud.price}€</div>
      <div>{leitud.image}</div>
      <div>{!leitud.active && <i>Toode on mitteaktiivne</i>}</div>
    </div>
  )
}

export default YksAuto