import classes from "./Button.module.css";

type Button = {
    type: "submit" | "reset" | "button";
    onClick?: (e: React.MouseEvent<HTMLElement>) => void | undefined;
    className?: any | undefined;
    children?: React.ReactNode;
    disabled?: boolean;
};

const Button: React.FC<Button> = ({
    type,
    onClick,
    className,
    children,
    disabled,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${classes.button} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
