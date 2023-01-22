import { useContext } from "react";
import Card from "../../components/UI/Card";
import CartListItem from "./CartListItem";
import OrderContext from "../../store/OrderContext";
import classes from "./CartList.module.css";

const CartList = () => {
    const cartCtx = useContext(OrderContext);

    return (
        <Card className={classes.cart_list}>
            <ul>
                {cartCtx!.cartItems.map((cartItem) => {
                    return (
                        <CartListItem
                            key={cartItem.id}
                            productProps={{ ...cartItem }}
                            onAddItem={cartCtx!.addToCart}
                            onRemoveFromCart={cartCtx!.removeFromCart}
                        />
                    );
                })}
            </ul>
        </Card>
    );
};

export default CartList;
