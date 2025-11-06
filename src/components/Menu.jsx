import { Link } from "react-router-dom"
import halloween from "../assets/undraw_halloween-2025_o47f.svg"

function Menu() {
  return (
    <div>
      <Link to="/">
         <img className="pilt" src={halloween} alt="" />
      </Link>

      {/* <Link to="/esindused">
        <button>Esindused</button>
      </Link> */}

      <Link to="/osta-kinkekaart">
        <button>Kinkekaart</button>
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

      <Link to="/halda-home">
        <button>Halda</button>
      </Link>

      <Link to="/lisa-home">
        <button>Lisa</button>
      </Link>
    </div>
  )
}

export default Menu