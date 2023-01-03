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

export interface InputComponent {
    label: string;
    type: string;
    name: string;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    errorMessage: string;
    isValid: boolean;
    value: string;
}

export type RenderInput = (
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    isValid: boolean,
    error: string,
    key: string
) => JSX.Element;

interface validationRule {
    ruleName: string;
    message: string;
    validate: (value: string) => boolean;
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
