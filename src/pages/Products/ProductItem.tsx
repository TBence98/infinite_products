import { useNavigate } from "react-router-dom";
import { Product } from "../../models/types";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import DiscountCard from "../../components/UI/DiscountCard";

import classes from "./ProductItem.module.css";

const ProductItem: React.FC<Product> = ({
    title,
    description,
    discountPercentage,
    price,
    thumbnail,
    id,
}) => {
    const navigate = useNavigate();
    const formatedPrice = price + " $";

    const seeDetails = () => {
        navigate("/products/" + id);
    };

    return (
        <Card className={classes.card}>
            <img className={classes.thumbnail} src={thumbnail} alt={title} />
            <DiscountCard discount={discountPercentage} />
            <div className={classes.infos_container}>
                <p className={classes.title}>{title}</p>
                <p className={classes.price}>{formatedPrice}</p>
            </div>
            <p className={classes.description}>{description}</p>
            <Button
                type="button"
                className={classes.details_btn}
                onClick={seeDetails}
            >
                See details
            </Button>
        </Card>
    );
};

export default ProductItem;
