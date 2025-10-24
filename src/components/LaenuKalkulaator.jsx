import { useRef, useState } from "react";

function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(351.61);
  const [laenusumma, setLaenusumma] = useState(75000);

  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();

  function arvutaKuumakse() {
    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value)

    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value)
    / 12 / perioodRef.current.value);
  }

  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input defaultValue={75000} ref={ostuhindRef} onChange={arvutaKuumakse} type="text" /><br />
      <label>Sissemakse</label>
      <input defaultValue={0} ref={sissemakseRef} onChange={arvutaKuumakse} type="text" /><br />
      <label>Laenusumma</label>
      <input value={laenusumma} disabled type="text" /><br />
      <label>Periood</label>
      <input defaultValue={30} ref={perioodRef} onChange={arvutaKuumakse} type="text" /><br />
      <label>Marginaal</label>
      <input ref={marginaalRef} onChange={arvutaKuumakse} type="text" /><br />
      <label>Euribor</label>
      <input ref={euriborRef} onChange={arvutaKuumakse} type="text" /><br />
      <label>Intress kokku</label>
      <input disabled type="text" /><br />
      { laenusumma < 10000000 && laenusumma > 20000 ?
        <div>Kuumakse {kuumakse.toFixed(2)}€</div> :
        <div>Laenusumma võib olla vahemikus 20 000-10 000 000</div>
      }
    </div>
  )
}

export default LaenuKalkulaator