import {Routes, Route} from "react-router-dom";
import { Cart, ShopList } from "../pages";


export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={<ShopList title="Home" />} />
                <Route path="/cart" element={<Cart title="Cart"/>} />
            </Routes>
        </div>
    )
}