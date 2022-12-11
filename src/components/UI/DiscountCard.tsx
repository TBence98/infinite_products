import classes from "./DiscountCard.module.css";

const DiscountCard: React.FC<{ discount: number }> = ({ discount }) => {
    return (
        <div className={classes.discountCard}>
            <p>-{discount}%</p>
        </div>
    );
};

export default DiscountCard;
