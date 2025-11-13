import { useEffect, useState } from "react";

function Vocabulary() {
  const [totalDefinitions, setTotalDefinitions] = useState(0);
  const [definitions, setDefinitions] = useState([]);
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    setSpinner(true);
    fetch("https://marineregions.org/rest/getGazetteerTypes.json")
      .then(r => r.json())
      .then(json => {
        setDefinitions(json);
        setTotalDefinitions(json.length);
        setSpinner(false);
      });
  }, []);

  return (
    <div>
      <div>Marine regions dictionary</div> <br />
      {!spinner ? <div>Total number of definitions: {totalDefinitions}</div> :(
        <div>
          <div>Loading definitions ...</div>
          <div className="dots">
            <div></div><div></div><div></div>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {definitions.map(definition => 
            <tr key={definition.typeID}>
              <td>{definition.type}</td>
              <td>{definition.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Vocabulary


// https://marineregions.org/rest/getGazetteerTypes.json