import {useState } from "react";
import { useFetch } from "../hooks";
// import watch from "../assets/watch.jpg";

export const Card = () => {
    const [url, setUrl] = useState("http://localhost:8000/products")
    const { data:products, loading, error } = useFetch(url);
    

    return (
        <>
            { loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> }

            { error && <p>{error}</p>}

            {products && products.map((product, index) => {
                return (
                    <div className="product" key={index}>
                        <img src={product.img} alt="" />
                        <p className="name">{product.name}</p>

                        <div className="action">
                            <p>${product.price}</p>
                            <button id="addCart">Add To Cart</button>
                        </div>
                    </div>
                )
            })}
        </>
        
       
    )
}

