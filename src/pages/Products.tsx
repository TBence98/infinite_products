import { useState, useRef, useCallback } from "react";
import useLoadProducts from "../hooks/useLoadProducts";

const Products = () => {
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

    console.log(products);
    return (
        <>
            <h1>Hello World</h1>
            <ul>
                {products.map((product, index) => {
                    if (products.length === index + 1) {
                        return (
                            <li ref={lastProductElementRef} key={product.id}>
                                {product.title}
                            </li>
                        );
                    } else {
                        return <li key={product.id}>{product.title}</li>;
                    }
                })}
            </ul>
        </>
    );
};

export default Products;
