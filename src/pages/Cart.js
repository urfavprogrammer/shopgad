
import { CartCard } from "../components";
import { useTitle } from "../hooks";
import { useCart } from "../context/CartContext";
export const Cart = ({title}) => {
  const { total, cartList } = useCart();

  useTitle(title)
  
  return (
    <main>
    <section className="cart">
    <h1>Cart Items: {cartList.length}  / ${total}</h1>
    {cartList.map((product) => (
      <CartCard key={product.id} product={product}/>
    ))}
  
    </section>
     
    </main>
    
  )
}


