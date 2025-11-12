import { useState } from "react";
import hinnadAndmebaasist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

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
            <th>Sõnana</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={hind.nr}>
              <td>{index}</td>
              <td>{index+1}</td>
              <td>{hind.nr}</td>
              <td>{hind.sonana}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
              <td>
                <Link to={`/muuda-hind/${index}`}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad