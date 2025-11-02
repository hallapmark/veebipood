import { useState } from "react";
import hinnadAndmebaasist from "../../data/hinnad.json";

function HaldaHinnad() {

  const [hinnad, setHinnad] = useState(hinnadAndmebaasist.slice());
  
  function kustuta(index) {
    hinnadAndmebaasist.splice(index,1);
    setHinnad(hinnadAndmebaasist.slice());
  }

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Järjekorranumber</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={hind}>
              <td>{index}</td>
              <td>{index+1}</td>
              <td>{hind}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad