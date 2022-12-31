import React, { useReducer } from "react";
import { CartItem } from "../models/types";
import CartContext from "./CartContext";

type CartContextProviderProps = {
    children: React.ReactNode;
};

type cartState = {
    items: CartItem[];
    totalAmount: number;
};

type cartAction = {
    type: "ADD" | "REMOVE";
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

    return defaultCartState;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addToCart = (product: CartItem) => {
        dispatchCartAction({ type: "ADD", item: product });
    };

    const removeFromCart = (id: number) => {
        dispatchCartAction({ type: "REMOVE", id });
    };

    const contextValues = {
        cartItems: cartState.items,
        addToCart,
        removeFromCart,
    };

    console.log(cartState);

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
