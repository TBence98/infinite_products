import { useContext } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import OrderContext from "../../store/OrderContext";
import classes from "./Cart.module.css";

const Cart = () => {
    const cartCtx = useContext(OrderContext);
    const cartIsEmpty = cartCtx!.cartItems.length === 0;
    return (
        <>
            <h1>Cart</h1>
            {cartIsEmpty ? (
                <>
                    <p>Your cart is empty.</p>
                    <Link to="/products">Continue Shopping</Link>
                </>
            ) : (
                <div className={classes.cart_container}>
                    <CartList />
                    <CartSummary />
                </div>
            )}
        </>
    );
};

export default Cart;
