import {useState, useEffect } from "react";
// import { useFetch } from "../hooks";
import { useCart } from "../context/CartContext";

export const Card = ({product}) => {
    // const [url, setUrl] = useState("http://localhost:8000/products")
    // const { data:products, loading, error } = useFetch(url);
    const { addToCart,removeFromCart, cartList } = useCart();
    const [isInCart, setisInCart] = useState(false);

    const {img, name, id , price} = product;

    useEffect(() => {
        const productInCart = cartList.find(cartItem => cartItem.id === id);

        if(productInCart){
            setisInCart(true);
        } else {
            setisInCart(false);
        }

    }, [cartList, id])
    
    
    return (
       
                    <div className="product">
                        <img src={img} alt={name} />
                        <p className="name">{name}</p>

                        <div className="action">
                            <p>${price}</p>

                { isInCart ? <button className="remove"  onClick={() => removeFromCart(product)} >Remove</button>  : <button onClick={() => addToCart(product)} id="addCart">Add To Cart</button> }
                            
                        </div>
                    </div>
         
    )
}

