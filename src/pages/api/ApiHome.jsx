import { Link } from "react-router-dom"

function ApiHome() {
  return (
    <div>
      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/cars">
        <button>Cars</button>
      </Link>

      <Link to="/countries">
        <button>Countries</button>
      </Link>

      <Link to="/supplier1">
        <button>Supplier 1</button>
      </Link>

      <Link to="/supplier2">
        <button>Supplier 2</button>
      </Link>

      <Link to="/supplier3">
        <button>Supplier 3</button>
      </Link>

      <Link to="/vocabulary">
        <button>Vocabulary</button>
      </Link>
    </div>
  )
}
export default ApiHome