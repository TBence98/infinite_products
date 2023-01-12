import React from "react";
import { Product } from "../models/types";

interface ProductsContext {
    products: Product[];
    lastProductElementRef: (node: HTMLLIElement) => void;
}

const ProductsContext = React.createContext<ProductsContext>({
    products: [],
    lastProductElementRef: (node: HTMLLIElement) => {},
});

export default ProductsContext;
