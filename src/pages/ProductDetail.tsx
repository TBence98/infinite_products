import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./ProductDetail.module.css";
import ImageSlider from "../components/ImageSlider";
import ProductDetailInfos from "../components/ProductDetailInfos";

type ProductDatas = {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: string[];
    id: number;
    thumbnail: string;
};

const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState<ProductDatas | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios<ProductDatas>({
            method: "GET",
            url: "https://dummyjson.com/products/" + id,
        })
            .then((res) => {
                setProductDetails(res.data);
            })
            .catch((e) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong...</p>;
    }

    return (
        <>
            <h1>Product Detail Page {id}</h1>
            <div className={classes.details_container}>
                <ImageSlider slides={productDetails!.images} />
                <section className={classes.product_infos_container}>
                    <ProductDetailInfos
                        title={productDetails!.title}
                        description={productDetails!.description}
                        price={productDetails!.price}
                        discountPercentage={productDetails!.discountPercentage}
                        rating={productDetails!.rating}
                        stock={productDetails!.stock}
                        brand={productDetails!.brand}
                        category={productDetails!.category}
                    />
                </section>
            </div>
        </>
    );
};

export default ProductDetail;
