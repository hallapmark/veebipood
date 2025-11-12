import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Supplier1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setProducts(json));
  }, []);
  
  return (
    <div>
      <div>{products.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating rate / count</th>
            <th>Vt lähemalt</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td><img className="pilt" src={product.image} alt="" /></td>
              <td>{product.rating.rate} / {product.rating.count}</td>
              <td>
                <Link to={"/supplier1-details/" + product.id}>
                  <button>Vt. lähemalt</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Supplier1