import { useEffect, useState } from "react"

function Books() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [search, setSearch] = useState("react");

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/search/${search}?page=${page}`)
            .then(res=>res.json())            
            .then(json=> {
              setProducts(json.books);
              setTotalProducts(json.total);
              })
  }, [page, search]);

  // Navigeerimiseks:
  // HTMLs + Reactis
  // <Link to="/">

  // JS + Reactis
  // navigate useNavigate()

  // HTMLs + välisesse rakendusse
  // <a href=""></a>

  // JS + välisesse rakendusse
  // window.location.href = "http/"

  function searchFromProducts(searched) {
    if (searched.length <= 1) {
      return;
    }
    setSearch(searched);
  }
  
  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={"react"} onChange={(e) => searchFromProducts(e.target.value)} type="text" /> <br />
      <div>Raamatuid kokku {totalProducts} tk</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Osta</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.isbn13}>
              <td>{product.isbn13}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.subtitle}</td>
              <td><img className="pilt" src={product.image} alt="" /></td>
              <td>
                <a href={product.url} target="_blank">
                  <button>Osta</button>
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span>{page} / {Math.ceil(totalProducts/10)}</span>
      <button disabled={page === Math.ceil(totalProducts/10)} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}
export default Books