import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import OrderContext from "../../store/OrderContext";
import OrderForm from "./OrderForm";
import ShippingAndPayment from "./ShippingAndPayment";
import OrderProgress from "./OrderProgress";

import classes from "./Cart.module.css";

const Cart = () => {
    const orderCtx = useContext(OrderContext);
    const [orderPhase, setOrderPhase] = useState(1);
    const cartIsEmpty = orderCtx!.cartItems.length === 0;

    function goToNextPhase() {
        setOrderPhase((prevPhase) => prevPhase + 1);
    }

    function goToPhase(phase: number) {
        setOrderPhase(phase);
    }

    console.log(orderPhase);

    if (orderPhase === 1) {
        return (
            <>
                <h1>Cart</h1>
                {cartIsEmpty ? (
                    <>
                        <p>Your cart is empty.</p>
                        <Link to="/products">Continue Shopping</Link>
                    </>
                ) : (
                    <>
                        <OrderProgress
                            phase={orderPhase}
                            goToPhase={goToPhase}
                        />
                        <div className={classes.cart_container}>
                            <CartList />
                            <CartSummary goToNextPhase={goToNextPhase} />
                        </div>
                    </>
                )}
            </>
        );
    }
    if (orderPhase === 2) {
        return (
            <>
                <h1>Cart</h1>
                <OrderProgress phase={orderPhase} goToPhase={goToPhase} />
                <OrderForm goToNextPhase={goToNextPhase} />
            </>
        );
    }
    if (orderPhase === 3) {
        return (
            <>
                <h1>Cart</h1>
                <OrderProgress phase={orderPhase} goToPhase={goToPhase} />
                <ShippingAndPayment />
            </>
        );
    }
};

export default Cart;
