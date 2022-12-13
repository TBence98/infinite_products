export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail: string;
    images?: string[];
};

export interface IProductDetailInfos {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
}

export interface IProductDatas extends IProductDetailInfos {
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
}
