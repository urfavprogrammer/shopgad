// import {useState } from "react";
// import { useFetch } from "../hooks";

export const Card = ({product}) => {
    // const [url, setUrl] = useState("http://localhost:8000/products")
    // const { data:products, loading, error } = useFetch(url);
    
    return (
       
                    <div className="product">
                        <img src={product.img} alt="" />
                        <p className="name">{product.name}</p>

                        <div className="action">
                            <p>${product.price}</p>
                            <button id="addCart">Add To Cart</button>
                        </div>
                    </div>
         
    )
}

