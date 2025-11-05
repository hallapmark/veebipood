import { useParams } from "react-router-dom"
import kasutajadDB from "../../data/kasutajad.json"

function YksKasutaja() {
  const { nimi } = useParams();
  const leitud = kasutajadDB.find(kasutaja => kasutaja.name == nimi);

  if (leitud === undefined) {
    return <div>Kasutajat ei leitud!</div>
  }

  return (
    <div>
      <p>{leitud.name}</p>
      <p>{leitud.email}</p>
    </div>
  )
}

export default YksKasutaja