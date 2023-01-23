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
    thumbnail?: string;
    images?: string[];
};

export interface IProductDetailInfos {
    id: number;
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
    images?: string[];
    thumbnail: string;
}

export type CartItem = IProductDatas & {
    quantity: number;
};

export type RenderInput = (
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    isValid: boolean,
    error: string,
    key: string
) => JSX.Element;

interface validationRule {
    name: string;
    message: string;
    validate: (value: string) => boolean;
}

export type RegisterInput = (name: string) => void;

export type HandleChange = (
    name: string,
    value: string,
    isValid: boolean,
    errorMessage: string
) => void;

export interface BasicInputProps {
    label: string;
    type: string;
    name: string;
    validationRules: Array<validationRule>;
    className?: string;
}

export interface InputComponent extends BasicInputProps {
    handleChange: HandleChange;
    registerInput: RegisterInput;
}

export interface Input {
    renderInput: RenderInput;
    label: string;
    value: string;
    valid: boolean;
    errorMessage: string;
    touched: boolean;
    validationRules: Array<validationRule>;
}

export interface FormConfig {
    [inputName: string]: Input;
}

export interface OrderDatas {
    "contact info": {
        email: string;
        mobile: string;
        name: string;
    };
    "billing address": {
        street: string;
        "postal code": string;
        city: string;
        country: string;
        company?: string;
        "tax number"?: string;
        "VAT ID"?: string;
    };
    "shipping address": {
        name: string;
        street: string;
        "postal code": string;
        city: string;
        country: string;
        mobile: string;
    };
    note?: string;
    shipping: string;
    "payment method": string;
}

export interface UpdateOrderDatas {
    "contact info"?: {
        email: string;
        mobile: string;
        name: string;
    };
    "billing address"?: {
        street: string;
        "postal code": string;
        city: string;
        country: string;
        company?: string;
        "tax number"?: string;
        "VAT ID"?: string;
    };
    "shipping address"?: {
        name: string;
        street: string;
        "postal code": string;
        city: string;
        country: string;
        mobile: string;
    };
    note?: string;
    shipping?: string;
    "payment method"?: string;
}
