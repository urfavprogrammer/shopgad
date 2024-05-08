import { createContext, useContext } from "react"
const intialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(intialState);

export const CartProvider = ({children}) => {
        
        const value = {
            total: 50,
        }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext)
    return context;
};