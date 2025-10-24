//rafce ja rfce; rafc variant ka olemas; rfc samuti. ES7+ Pluginist need

import { useState } from "react"
import laigitud from "../assets/laigitud.svg";
import mittelaigitud from "../assets/mittelaigitud.svg";

function Avaleht() {
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogus!");
  const [like, setLike] = useState(false);

  function nulli() {
    setKogus(0);
    setSonum("Kogus nullitud!");
  }

  function v2henda() {
    setKogus(prev => prev - 1);
    setSonum("Kogus vähendatud!");
  }

  function suurenda() {
    setKogus(prev => prev + 1);
    setSonum("Kogus suurendatud!");
  }

  return (
    <div>
      {like && <img src={laigitud} alt="" />}
      {!like && <img src={mittelaigitud} alt="" />}

      {like ? 
      <img src={laigitud} alt="" /> :
      <img src={mittelaigitud} alt="" />
      }

      {!like && <button onClick={() => setLike(true)}>Laigituks</button>}
      {like && <button onClick={() => setLike(false)}>Like maha</button>}

      {like ?
      <button onClick={() => setLike(false)}>Like maha</button> :
      <button onClick={() => setLike(true)}>Laigituks</button>
      }

      <button onClick={() => setLike(!like)}>{like ? "Like maha" : "Laigituks"}</button>

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} <br />
      <button disabled={kogus === 0} onClick={v2henda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht