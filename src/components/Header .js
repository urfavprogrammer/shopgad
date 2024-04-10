import { useState } from "react";
import logo from "../assets/logo.svg";


export const Header = () => {
    const [isActive, setActive] = useState(true);

    const toggle = () => {
        setActive(!isActive);
    }

    return (
        <header className="poppins-regular ">
    
            <a href="#" className="logo">
                <img src={logo} alt="Shopgad" />
                <span>Shopgad</span>
           </a>
                
            
                <nav className="navigation">
                    <a href="#" className={`link ${isActive ? 'active' : null}`}> Home</a>
                    
                <a href="#" className={`link ${isActive ? 'active' : null}`}>Cart</a>

                </nav>
            
                   <a href="" className="items">
                Cart: 2
                   </a>
                
           
        </header>
    )
}

