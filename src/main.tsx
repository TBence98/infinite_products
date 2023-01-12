import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContextProvider from "./store/CartContextProvider";
import ProductsContextProvider from "./store/ProductsContextProvider";
import "./index.css";

/*
    StrictMode is removed now because it causes 2 renders when the components
    mount and the first ten products load 2x unnecessarily and also causing
    problem with their keys. This does not affect production mode,
    but I removed it anyways therefore you can test the app with the development
    server. If you want StrictMode just replace root creation lines with the
    code below*/

/* ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CartContextProvider>
        <ProductsContextProvider>
            <App />
        </ProductsContextProvider>
    </CartContextProvider>
);
