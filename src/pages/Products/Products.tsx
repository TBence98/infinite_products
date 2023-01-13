import { useState, useContext, useEffect } from "react";
import useLoadProducts from "../../hooks/useLoadProducts";
import ProductItem from "./ProductItem";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ProductsContext from "../../store/ProductsContext";

import classes from "./Products.module.css";

const Products = () => {
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const productsCtx = useContext(ProductsContext);

    useEffect(() => {
        if (productsCtx.products.length > 0 && isInitialLoading) {
            setIsInitialLoading(false);
        }
    }, [productsCtx.products]);

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
                {productsCtx.products.map((product, index) => {
                    if (productsCtx.products.length === index + 1) {
                        return (
                            <li
                                ref={productsCtx.lastProductElementRef}
                                key={product.id}
                            >
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
