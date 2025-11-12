import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Supplier1Details() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(response => response.json())
      .then(json => setProduct(json))
  }, [id]);

  if (!product.id) {
    return <div>...</div>
  }

  return (
    <div>
      <div>{product.id}</div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <div>{product.category}</div>
      <div><img className="pilt" src={product.image} alt="" /></div>
      <div>{product.rating.rate} / {product.rating.count}</div>
    </div>
  )
}

export default Supplier1Details