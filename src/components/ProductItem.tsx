import { Product } from "../models/types";
import Card from "./UI/Card";
import Button from "./UI/Button";
import DiscountCard from "./UI/DiscountCard";

import classes from "./ProductItem.module.css";

const ProductItem: React.FC<Product> = ({
    title,
    description,
    discountPercentage,
    price,
    thumbnail,
}) => {
    const formatedPrice = price + " $";

    return (
        <Card className={classes.card}>
            <img className={classes.thumbnail} src={thumbnail} />
            <DiscountCard discount={discountPercentage} />
            <div className={classes.infos_container}>
                <p className={classes.title}>{title}</p>
                <p className={classes.price}>{formatedPrice}</p>
            </div>
            <p className={classes.description}>{description}</p>
            <Button type="button" className={classes.details_btn}>
                See details
            </Button>
        </Card>
    );
};

export default ProductItem;
