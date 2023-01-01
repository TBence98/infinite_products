import classes from "./CartListItem.module.css";
import Card from "./UI/Card";
import { CartItem } from "../models/types";

interface CartListItemProps {
    productProps: CartItem;
    onAddItem: (product: CartItem) => void;
    onRemoveFromCart: (productId: number) => void;
}

const CartListItem = ({
    productProps,
    onAddItem,
    onRemoveFromCart,
}: CartListItemProps) => {
    const addItemHandler = () => {
        onAddItem({ ...productProps, quantity: 1 });
    };

    const removeItemHandler = () => {
        onRemoveFromCart(productProps.id);
    };

    return (
        <li>
            <Card className={classes.cart_item}>
                {/* <div
                    style={{
                        height: "50px",
                        width: "50px",
                        backgroundColor: "pink",
                    }}
                ></div> */}
                <img
                    src={productProps.thumbnail}
                    className={classes.thumbnail}
                />
                <div className={classes.product_title_container}>
                    <h2>{productProps.title}</h2>
                    <p>{productProps.description}</p>
                </div>
                <div className={classes.cart_actions_container}>
                    <button
                        type="button"
                        onClick={removeItemHandler}
                        className={classes.cart_counter_decrease}
                    >
                        &#8722;
                    </button>
                    <div className={classes.cart_counter}>
                        {productProps.quantity}
                    </div>
                    <button
                        type="button"
                        onClick={addItemHandler}
                        className={classes.cart_counter_increase}
                    >
                        &#x2B;
                    </button>
                </div>
                <span className={classes.price}>{productProps.price} $</span>
            </Card>
        </li>
    );
};

export default CartListItem;
