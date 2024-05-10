
import { Link, NavLink } from "react-router-dom"
import logo  from "../assets/logo.svg";
import { useCart } from "../context/CartContext";


export const Header = () => {
    const { cartList } = useCart();
    return (
        <header className="poppins-regular ">

            <Link to="/" className="logo">
                <img src={logo} alt="Shopgad Logo" />
                <span>Shopgad</span>
            </Link>

            <nav className="navigation">
                <NavLink to="/" className="link" end> Home</NavLink>

                <NavLink to="/cart" className="link">Cart</NavLink>

            </nav>

            <Link to="/cart" className="items">
                Cart: { cartList.length }
            </Link>

        </header>
  )
}

