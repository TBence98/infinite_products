import classes from "./DiscountCard.module.css";

const DiscountCard: React.FC<{
    discount: number;
    className?: any;
}> = ({ discount, className }) => {
    return (
        <div
            className={`${classes.discountCard} ${
                className ? className : null
            }`}
        >
            <p>-{discount}%</p>
        </div>
    );
};

export default DiscountCard;
