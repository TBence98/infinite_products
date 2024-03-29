import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./ProductDetail.module.css";
import { IProductDatas } from "../../models/types";
import ImageSlider from "./ImageSlider";
import ProductDetailInfos from "./ProductDetailInfos";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState<IProductDatas | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios<IProductDatas>({
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
        return (
            <div className={classes.spinner_container}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p>Something went wrong...</p>;
    }

    return (
        <div className={classes.details_container}>
            <section className={classes.image_slider_container}>
                <ImageSlider slides={productDetails!.images!} />
            </section>
            <section className={classes.product_infos_container}>
                <ProductDetailInfos
                    id={+id!}
                    title={productDetails!.title}
                    description={productDetails!.description}
                    price={productDetails!.price}
                    discountPercentage={productDetails!.discountPercentage}
                    rating={productDetails!.rating}
                    stock={productDetails!.stock}
                    brand={productDetails!.brand}
                    category={productDetails!.category}
                    thumbnail={productDetails!.thumbnail}
                />
            </section>
        </div>
    );
};

export default ProductDetail;
