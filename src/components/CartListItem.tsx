import classes from "./CartListItem.module.css";
import Card from "./UI/Card";

const CartListItem = ({ title }: { title: string }) => {
    return (
        <li>
            <Card className={classes.cart_item}>
                <div
                    style={{
                        height: "50px",
                        width: "50px",
                        backgroundColor: "pink",
                    }}
                ></div>
                <div className={classes.product_title_container}>
                    <h2>{title}</h2>
                    <p>Product description</p>
                </div>
                <div className={classes.cart_actions_container}>
                    <button className={classes.cart_counter_increase}>
                        &#x2B;
                    </button>
                    <div className={classes.cart_counter}>1</div>
                    <button className={classes.cart_counter_decrease}>
                        &#8722;
                    </button>
                </div>
                <span className={classes.price}>999$</span>
            </Card>
        </li>
    );
};

export default CartListItem;
