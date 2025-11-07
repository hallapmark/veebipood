import { useNavigate, useParams } from "react-router-dom"
import autoDB from "../../data/autod.json"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function MuudaAuto() {
  const { index } = useParams();
  const [car, setCar] = useState(autoDB[index]);
  const navigate = useNavigate(); 
  // Reacti hook (Reacti erikood) 
  // 1. peab algama use- eesliidesega
  // 2. kõik use-id peavad olema top-levelil. 
  // 3. ei tohi olla conditional/loodud tingimuslikult (if või early return)
  // 4. peab olema imporditud
  // 5. peab olema funktsionaalne ehk teda peab käivitama (sulgude abil)

  function update() {
    if (car.price <= 0) {
      toast.error("Hind ei saa olla null või negatiivne");
      return;
    }
    autoDB[index] = car;
    navigate("/halda-autod");
  }

  if (car === undefined) {
    return <div>Autot ei leitud!</div>
  }  

  return (
    <div>
      <label>Name</label> <br />
      <input defaultValue={car.name} onChange={(e) => setCar({...car, name: e.target.value})} type="text" /> <br />
      <label>Price</label> <br />
      <input defaultValue={car.price} onChange={(e) => setCar({...car, price: Number(e.target.value)})} type="number" /> <br />
      <label>Active</label> <br />
      <input defaultValue={car.active} onChange={(e) => setCar({...car, active: e.target.checked})} type="checkbox" /> <br />
      <label>Image</label> <br />
      <input defaultValue={car.image} onChange={(e) => setCar({...car, image: e.target.value})} type="text" /> <br />
      {/* <Link to="/halda-autod"> */}
        <button onClick={update}>Change</button>
      {/* </Link> */}
      {/* reacti muud erikoodi vaja siin navigeerimiseks. Me ei taha et alati link toimiks, ainult siis kui success */}

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
      
    </div>
  )
}

export default MuudaAuto