import { useParams } from "react-router-dom"
import tootajadDB from "../../data/tootajad.json"

function YksTootaja() {
  const { nimi } = useParams();
  const tootaja = tootajadDB.find(tootaja => tootaja.name === nimi);

  if (tootaja === undefined) {
    return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      <h1>{tootaja.name}</h1>
      <p>{tootaja.email}</p>
    </div>
  )
}

export default YksTootaja