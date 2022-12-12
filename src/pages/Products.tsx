import { useState, useRef, useCallback } from "react";
import useLoadProducts from "../hooks/useLoadProducts";
import ProductItem from "../components/ProductItem";

import classes from "./Products.module.css";

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
            <h1>See Products</h1>
            <ul className={classes.products_grid}>
                {products.map((product, index) => {
                    if (products.length === index + 1) {
                        return (
                            <li ref={lastProductElementRef} key={product.id}>
                                <ProductItem
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    discountPercentage={
                                        product.discountPercentage
                                    }
                                    thumbnail={product.thumbnail}
                                    id={product.id}
                                />
                            </li>
                        );
                    } else {
                        return (
                            <li ref={lastProductElementRef} key={product.id}>
                                <ProductItem
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    discountPercentage={
                                        product.discountPercentage
                                    }
                                    thumbnail={product.thumbnail}
                                    id={product.id}
                                />
                            </li>
                        );
                    }
                })}
            </ul>
        </>
    );
};

export default Products;
