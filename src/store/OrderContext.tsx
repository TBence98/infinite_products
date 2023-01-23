import React from "react";
import { CartItem } from "../models/types";
import { UpdateOrderDatas, OrderDatas } from "../models/types";

type OrderContext = {
    cartItems: CartItem[];
    totalAmount: number;
    orderDatas: OrderDatas;
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
    addOrderDatas: (updateOrderDatas: UpdateOrderDatas) => void;
    resetOrderContext: () => void;
};

const OrderContext = React.createContext<OrderContext | null>(null);

export default OrderContext;
