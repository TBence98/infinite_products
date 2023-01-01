import { useContext } from "react";
import DiscountCard from "./UI/DiscountCard";
import Button from "./UI/Button";
import RatingStars from "./RatingStars";
import { IProductDatas } from "../models/types";
import CartContext from "../store/CartContext";

import classes from "./ProductDetailInfos.module.css";

const ProductDetailInfos: React.FC<IProductDatas> = (props) => {
    const cartCtx = useContext(CartContext);
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
    } = props;

    const addToCartHandler = () => {
        cartCtx!.addToCart({ ...props, quantity: 1 });
    };

    return (
        <>
            <div className={classes.header}>
                <h2 className={classes.title}>{title}</h2>
                <div className={classes.stars_container}>
                    <RatingStars rating={rating} />
                    <p>{rating}</p>
                </div>
            </div>
            <p className={classes.description}>{description}</p>
            <p>Stock: {stock}</p>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <DiscountCard
                discount={discountPercentage}
                className={classes.discount_card}
            />
            <div className={classes.purchase_container}>
                <p className={classes.price}>{price} $</p>
                <Button
                    type="button"
                    className={classes.add_to_cart_btn}
                    onClick={addToCartHandler}
                >
                    Add to cart
                </Button>
            </div>
        </>
    );
};

export default ProductDetailInfos;
