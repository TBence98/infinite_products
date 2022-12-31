import React from "react";
import { CartItem } from "../models/types";

type CartContext = {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
};

const CartContext = React.createContext<CartContext | null>(null);

export default CartContext;
