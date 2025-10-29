import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/">
         <img className="pilt" src="https://picsum.photos/200/300" alt="" />
      </Link>

      {/* <Link to="/esindused">
        <button>Esindused</button>
      </Link> */}

      <Link to="/osta-kinkekaart">
        <button>Kinkekaart</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="arrays-home">
        <button>Arrays</button>
      </Link>
    </div>
  )
}

export default Menu