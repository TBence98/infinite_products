import classes from "./Button.module.css";

type Button = {
    type: "submit" | "reset" | "button";
    onClick?: (e: React.MouseEvent<HTMLElement>) => void | undefined;
    className?: any | undefined;
    children?: React.ReactNode;
};

const Button: React.FC<Button> = ({ type, onClick, className, children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${classes.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
