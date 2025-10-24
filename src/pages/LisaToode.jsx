import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode");
  const nimiRef = useRef();

  const lisa = () => {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      setSonum("Toode lisatud!");
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Nimi</label> <br/>
      <input ref={nimiRef} type="text" /> <br/>
      <button onClick={() => lisa()}>Lisa</button> <br/>
    </div>
  )
}

export default LisaToode