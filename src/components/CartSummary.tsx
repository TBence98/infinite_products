import { Link } from "react-router-dom";
import Card from "./UI/Card";
import classes from "./CartSummary.module.css";

const CartSummary = () => {
    return (
        <Card className={classes.cart_summary}>
            <h2>Order Summary</h2>
            <p>Amount: 999$</p>
            <p>Shipment Cost: Free</p>
            <div className={classes.line_separator}></div>
            <p>Total Amount:</p>
            <p>999%</p>
            <Link to="/checkout">Proceed To Checkout</Link>
        </Card>
    );
};

export default CartSummary;
