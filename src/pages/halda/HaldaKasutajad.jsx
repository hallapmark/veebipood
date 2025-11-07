import { useState } from "react"
import usersDB from "../../data/kasutajad.json" 

function HaldaKasutajad() {
  const [users, setUsers] = useState(usersDB.slice());

  function kustuta(index) {
    usersDB.splice(index, 1);
    setUsers(usersDB.slice());
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Nimi</th>
            <th>Email</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {users.map((kasutaja, i) =>
            <tr key={kasutaja.name}>
              <td>{i+1}</td>
              <td>{kasutaja.name}</td>
              <td>{kasutaja.email}</td>
              <td>
                <button onClick={() => kustuta(i)}>X</button>
              </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaKasutajad