import { useEffect, useState } from "react"

function Supplier2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
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
            {/* <th>Rating rate / count</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td><img className="pilt" src={product.images[0]} alt="" /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Supplier2