import { ReactNode, useState, useCallback, useRef } from "react";
import useLoadProducts from "../hooks/useLoadProducts";
import ProductsContext from "./ProductsContext";

const ProductsContextProvider = ({ children }: { children: ReactNode }) => {
    const [skipNum, setSkipNum] = useState(0);
    const { products, hasMore, loading, error } = useLoadProducts(10, skipNum);

    const observer = useRef<IntersectionObserver>();

    const lastProductElementRef = useCallback(
        (node: HTMLLIElement) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setSkipNum((prevPageNumber) => prevPageNumber + 10);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const contextValues = {
        products,
        lastProductElementRef,
    };

    return (
        <ProductsContext.Provider value={contextValues}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
