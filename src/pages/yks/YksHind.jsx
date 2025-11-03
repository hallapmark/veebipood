import { useParams } from "react-router-dom"
import hinnadDB from "../../data/hinnad.json"

function YksHind() {
  const { n } = useParams();
  const leitud = hinnadDB.find(hind => hind.nr === Number(n));

  if (leitud === undefined) {
    return <div>Hinda ei leitud!</div>
  } 

  return (
    <div>
      <div>{leitud.nr}</div>
      <div>{leitud.sonana}</div>
    </div>
  )
}

export default YksHind