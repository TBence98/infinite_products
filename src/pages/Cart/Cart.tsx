import { useContext } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import OrderContext from "../../store/OrderContext";
import OrderForm from "./OrderForm";
import classes from "./Cart.module.css";

const Cart = () => {
    const orderCtx = useContext(OrderContext);
    const cartIsEmpty = orderCtx!.cartItems.length === 0;
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
            <OrderForm />
        </>
    );
};

export default Cart;
