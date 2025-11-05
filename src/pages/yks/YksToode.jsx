import { useParams } from "react-router-dom"
import tootedAndmebaasist from "../../data/tooted.json"

function YksToode() {
  const { nimi } = useParams();
  const leitud = tootedAndmebaasist.find(toode => toode.name === nimi);

  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <h1>{leitud.name}</h1>
      <p>{leitud.price}€</p>
      <p>{leitud.description_est}</p>
    </div>
  )
}

export default YksToode