import React, { useReducer, useState } from "react";
import { CartItem, OrderDatas, UpdateOrderDatas } from "../models/types";
import OrderContext from "./OrderContext";

type CartContextProviderProps = {
    children: React.ReactNode;
};

type cartState = {
    items: CartItem[];
    totalAmount: number;
};

type cartAction = {
    type: "ADD" | "REMOVE" | "RESET";
    item?: CartItem;
    id?: number;
};

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state: cartState, action: cartAction) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item!.price * action.item!.quantity;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item!.id
        );

        const existingItem = state.items[existingCartItemIndex];

        let updatedItems: CartItem[];

        // if the item already exists in the cart we just update it
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item!.quantity,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item!);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = { ...state.items[existingCartItemIndex] };

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems: CartItem[];

        // if the item quantity is only 1 we have to remove it from the list
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            existingItem.quantity--;
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = existingItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "RESET") {
        return defaultCartState;
    }

    return defaultCartState;
};

const OrderContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );
    const [orderDatas, setOrderDatas] = useState({} as OrderDatas);
    const [orderPhase, setOrderPhase] = useState<1 | 2 | 3 | 4>(1);

    const addToCart = (product: CartItem) => {
        dispatchCartAction({ type: "ADD", item: product });
    };

    const removeFromCart = (id: number) => {
        dispatchCartAction({ type: "REMOVE", id });
    };

    const addOrderDatas = (updateOrderDatas: UpdateOrderDatas) => {
        setOrderDatas((prevOrderDatas) => {
            return { ...prevOrderDatas, ...updateOrderDatas };
        });
    };

    const goToNextPhase = () => {
        setOrderPhase((prevPhase) => (prevPhase + 1) as 1 | 2 | 3 | 4);
    };

    const resetOrderContext = () => {
        dispatchCartAction({ type: "RESET" });
        setOrderDatas({} as OrderDatas);
        setOrderPhase(1);
    };

    const contextValues = {
        cartItems: cartState.items,
        totalAmount: cartState.totalAmount,
        orderDatas,
        orderPhase,
        addToCart,
        removeFromCart,
        addOrderDatas,
        goToNextPhase,
        resetOrderContext,
    };

    console.log(cartState);

    return (
        <OrderContext.Provider value={contextValues}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
