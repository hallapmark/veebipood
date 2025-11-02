import { Link } from "react-router-dom";

function LisaHome() {
  return (
    <div>
      <Link to="/lisa-auto">
        <button>Lisa Auto</button>
      </Link>

      <Link to="/lisa-esindus">
        <button>Lisa Esindus</button>
      </Link>

      <Link to="/lisa-hind">
        <button>Lisa Hind</button>
      </Link>

      <Link to="/lisa-kasutaja">
        <button>Lisa Kasutaja</button>
      </Link>

      <Link to="/lisa-tootaja">
        <button>Lisa Töötaja</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa Toode</button>
      </Link>
    </div>
  );
}

export default LisaHome;
