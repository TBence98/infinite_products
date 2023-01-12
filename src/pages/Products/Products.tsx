import { useState, useRef, useCallback, useEffect } from "react";
import useLoadProducts from "../../hooks/useLoadProducts";
import ProductItem from "./ProductItem";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import classes from "./Products.module.css";

const Products = () => {
    const [skipNum, setSkipNum] = useState(0);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
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

    useEffect(() => {
        if (products.length > 0 && isInitialLoading) {
            setIsInitialLoading(false);
        }
    }, [products]);

    if (isInitialLoading) {
        return (
            <div className={classes.spinner_container}>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <>
            <h1 className={classes.title}>See Products</h1>
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
                            <li key={product.id}>
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
