import classes from "./Card.module.css";

const Card: React.FC<{
    className?: any;
    children?: React.ReactNode;
}> = ({ className, children }) => {
    return (
        <div className={`${classes.card} ${className ? className : ""}`}>
            {children}
        </div>
    );
};

export default Card;
