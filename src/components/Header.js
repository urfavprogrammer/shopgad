
import { Link, NavLink } from "react-router-dom"
import logo  from "../assets/logo.svg";


export const Header = () => {
    return (
        <header className="poppins-regular ">

            <Link to="/" className="logo">
                <img src={logo} alt="Shopgad" />
                <span>Shopgad</span>
            </Link>

            <nav className="navigation">
                <NavLink to="/" className="link" end> Home</NavLink>

                <NavLink to="/cart" className="link">Cart</NavLink>

            </nav>

            <NavLink to="" className="items">
                Cart: 2
            </NavLink>

        </header>
  )
}

