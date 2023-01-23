import React from "react";
import { CartItem } from "../models/types";
import { UpdateOrderDatas, OrderDatas } from "../models/types";

type OrderContext = {
    cartItems: CartItem[];
    totalAmount: number;
    orderDatas: OrderDatas;
    orderPhase: 1 | 2 | 3 | 4;
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
    addOrderDatas: (updateOrderDatas: UpdateOrderDatas) => void;
    goToNextPhase: () => void;
    resetOrderContext: () => void;
};

const OrderContext = React.createContext<OrderContext | null>(null);

export default OrderContext;
