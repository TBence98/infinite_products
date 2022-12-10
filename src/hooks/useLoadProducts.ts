import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

type GetProductsResponse = {
  products: Product[],
  total: number,
  skip: number,
  limit: number
};

const useLoadProducts = (query: number, pageNumber: number) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
    axios<GetProductsResponse>({
      method: 'GET',
      url: 'https://dummyjson.com/products',
      params: { limit: query, skip: pageNumber },
    }).then((res) => {
        setProducts(prevProducts => {
          return [...prevProducts, ...res.data.products];
        });
        setHasMore(res.data.total > pageNumber);
    }).catch(e => {
        setError(true);
    })
    }, [query, pageNumber])

    return { products, loading, error, hasMore };
}

export default useLoadProducts;
