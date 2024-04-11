
import { useTitle } from "../hooks"

export const Cart = ({title}) => {
  useTitle(title)
  return (
    <main>
    <section className="cart">
    <h1>Cart Items: 2</h1>
        <div className="cartCard">
          <img src="" alt="" />
          <p className="productName"> Watch</p>
          <p className="productPrice">$100</p>
          <button>Remove</button>
        </div>
    </section>
     
    </main>
    
  )
}


