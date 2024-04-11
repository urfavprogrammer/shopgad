
import { CartCard } from "../components"
import { useTitle } from "../hooks"

export const Cart = ({title}) => {
  const products = [
    {
      "id": 10001,
      "img": "/assets/images/AmazonSpeaker.jpg",
      "price": 800,
      "name": "Amazon Speaker",
      "in_stock": "true"
    },
    {
      "id": 10002,
      "img": "/assets/images/AppleWrist.jpg",
      "price": 1400,
      "name": "Apple Watch",
      "in_stock": "true"
    }
  ]
  useTitle(title)
  
  return (
    <main>
    <section className="cart">
    <h1>Cart Items: {products.length}</h1>
    {products.map((product) => (
      <CartCard key={product.id} product={product}/>
    ))}
  
    </section>
     
    </main>
    
  )
}


