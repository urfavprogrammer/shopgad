import { useCart } from "../context/CartContext";

export const CartCard = ({product}) => {
    const { removeFromCart } = useCart();
    const {name, price, img} = product;
    return (
        <>
            <div className="cartCard">
                <img src={img} alt={name} />
                <p className="productName"> {name}</p>
                <p className="productPrice">${price}</p>
                <button onClick={()=>removeFromCart(product)}>Remove</button>
            </div>
            
        </>

    )
}
