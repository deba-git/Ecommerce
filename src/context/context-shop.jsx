import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log(cartItems);
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalPrice = () => {
        let total = 0;

        for (let i = 0; i < PRODUCTS.length; i++) {
            const { id } = PRODUCTS[i];

            if (cartItems[id]) {
                total += cartItems[id] * PRODUCTS[i].price;
            }
        }

        return total;
    };

    return (
        <shopContext.Provider
            value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}
        >
            {props.children}
        </shopContext.Provider>
    );
};
