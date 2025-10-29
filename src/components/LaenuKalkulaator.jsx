import { useRef, useState } from "react";

function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(351.61);
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intressKokku, setIntressKokku] = useState(3.85);

  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();

  function arvutaKuumakse() {
    const intress = Number(euriborRef.current.value) + Number(marginaalRef.current.value)
    setIntressKokku(intress);
    // current.vale on alati string

    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value)
    / 12 / perioodRef.current.value * intress / 2.3); // jäägilt tuleb, praegu lihtsalt hardcoded
    // setid kogutakse funktsiooni lõpuks kokku ja siis alles käivitatakse. 
    // setKuumakse() ajaks pole setIntressKokku veel seatud. nii et intressKokku ei
    // saa kasutada.
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
      {/* <input defaultValue={30} ref={perioodRef} onChange={arvutaKuumakse} type="text" /><br /> */}
      <select defaultValue={30} ref={perioodRef} onChange={arvutaKuumakse}>
        <option value={5}>viis</option>
        <option value={10}>kümme</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
        {/* {[...Array(30).keys()].map(option => 
          <option key={option}>{option+1}</option>
        )} */}
      </select> <br />
      <label>Marginaal</label>
      <input defaultValue={1.7} ref={marginaalRef} onChange={arvutaKuumakse} type="number" /><br />
      <label>Euribor</label>
      <input defaultValue={2.15} ref={euriborRef} onChange={arvutaKuumakse} type="number" /><br />
      <label>Intress kokku</label>
      <input value={intressKokku.toFixed(2)} disabled type="text" /> <br />
      <input disabled type="text" /><br />
      { laenusumma < 10000000 && laenusumma > 20000 ?
        <div>Kuumakse {kuumakse.toFixed(2)}€</div> :
        <div>Laenusumma võib olla vahemikus 20 000-10 000 000</div>
      }
    </div>
  )
}

export default LaenuKalkulaator