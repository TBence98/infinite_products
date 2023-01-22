import { useContext } from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import OrderContext from "../../store/OrderContext";
import classes from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartButton = () => {
    const cartCtx = useContext(OrderContext);

    const itemCount = cartCtx!.cartItems.reduce((count, item) => {
        return count + item.quantity;
    }, 0);

    return (
        <Link className={classes.cart_button} to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {itemCount > 0 ? (
                <div className={classes.item_count}>{itemCount}</div>
            ) : null}
            <span>Cart</span>
        </Link>
    );
};

export default CartButton;
