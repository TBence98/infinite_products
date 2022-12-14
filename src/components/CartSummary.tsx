import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import CartContext from "../store/CartContext";
import classes from "./CartSummary.module.css";

const CartSummary = () => {
    const cartCtx = useContext(CartContext);
    const ShipmentIsFree = cartCtx!.totalAmount > 50;

    return (
        <Card className={classes.cart_summary}>
            <h2>Order Summary</h2>
            <div className={classes.summary_line}>
                <span>Amount:</span>
                <span>{cartCtx!.totalAmount} $</span>
            </div>
            <div className={classes.summary_line}>
                <span>Shipment Cost:</span>
                <span className={ShipmentIsFree ? classes.free_shipment : ""}>
                    {ShipmentIsFree ? "FREE" : "5 $"}
                </span>
            </div>
            <div className={classes.line_separator}></div>
            <p className={classes.total_amount_text}>Total Amount:</p>
            <p className={classes.total_amount}>{cartCtx!.totalAmount} $</p>
            <Link to="/checkout" className={classes.proveed_btn}>
                Proceed To Checkout
            </Link>
        </Card>
    );
};

export default CartSummary;
