import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={classes.rootLayout}>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
