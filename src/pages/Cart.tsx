import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import classes from "./Cart.module.css";

const Cart = () => {
    return (
        <>
            <h1>Cart</h1>
            <div className={classes.cart_container}>
                <CartList />
                <CartSummary />
            </div>
        </>
    );
};

export default Cart;
