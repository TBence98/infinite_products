import React from "react";
import { CartItem } from "../models/types";

type OrderContext = {
    cartItems: CartItem[];
    totalAmount: number;
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
};

const OrderContext = React.createContext<OrderContext | null>(null);

export default OrderContext;
