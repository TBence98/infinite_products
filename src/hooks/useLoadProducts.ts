import { useState, useEffect } from "react";
import axios from "axios";

import { Product } from "../models/types";

type GetProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

const useLoadProducts = (query: number, skipNumber: number) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios<GetProductsResponse>({
            method: "GET",
            url: "https://dummyjson.com/products",
            params: { limit: query, skip: skipNumber },
        })
            .then((res) => {
                setProducts((prevProducts) => {
                    return [...prevProducts, ...res.data.products];
                });
                setHasMore(res.data.total > skipNumber);
            })
            .catch((e) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query, skipNumber]);

    return { products, loading, error, hasMore };
};

export default useLoadProducts;
