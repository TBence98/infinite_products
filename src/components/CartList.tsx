import { useContext } from "react";
import Card from "./UI/Card";
import CartListItem from "./CartListItem";
import CartContext from "../store/CartContext";
import classes from "./CartList.module.css";

const CartList = () => {
    const cartCtx = useContext(CartContext);

    return (
        <Card className={classes.cart_list}>
            <ul>
                {cartCtx!.cartItems.map((cartItem) => {
                    return (
                        <CartListItem
                            key={cartItem.id}
                            title={cartItem.title}
                        />
                    );
                })}
            </ul>
        </Card>
    );
};

export default CartList;
