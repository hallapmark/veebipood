import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Supplier3() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100&skip=0&select=id,title,price,description,images')
            .then(res=>res.json())            
            .then(json=>setProducts(json.products));
  }, []);
  
  return (
    <div>
      <div>There are {products.length} products</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><img className="pilt" src={product.images[0]} alt="" /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Supplier3

// otsi ise mingi link toodetega