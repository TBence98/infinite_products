import { Link } from "react-router-dom";
import CartButton from "./UI/CartButton";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <>
            <nav className={classes.main_navigation}>
                <Link to="/products" className={classes.logo}>
                    Infinite Products
                </Link>
                <CartButton />
            </nav>
            <div className={classes.decor_line}></div>
        </>
    );
};

export default MainNavigation;
