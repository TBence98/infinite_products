import Input from "../components/UI/Input";

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    atSignRule,
} from "./inputValidationRules";

function createFormFieldConfig(
    label: string,
    name: string,
    type: string,
    defaultValue = ""
) {
    return {
        renderInput: (
            handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
            value: string,
            isValid: boolean,
            error: string,
            key: string
        ) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    errorMessage={error}
                />
            );
        },
        label,
        value: defaultValue,
        valid: false,
        errorMessage: "",
        touched: false,
    };
}

// object representation of order form
export const orderForm = {
    FirstName: {
        ...createFormFieldConfig("First Name", "FirstName", "text"),
        validationRules: [
            requiredRule("First name"),
            minLengthRule("First name", 3),
            maxLengthRule("First name", 25),
        ],
    },
    LastName: {
        ...createFormFieldConfig("Last Name", "LastName", "text"),
        validationRules: [
            requiredRule("Last name"),
            minLengthRule("Last name", 3),
            maxLengthRule("Last name", 25),
        ],
    },
    email: {
        ...createFormFieldConfig("Email", "email", "email"),
        validationRules: [
            requiredRule("Email"),
            atSignRule("Email"),
            minLengthRule("Email", 10),
            maxLengthRule("Email", 25),
        ],
    },
    city: {
        ...createFormFieldConfig("City", "city", "text"),
        validationRules: [
            requiredRule("City"),
            minLengthRule("City", 3),
            maxLengthRule("City", 20),
        ],
    },
    street: {
        ...createFormFieldConfig("Street", "street", "text"),
        validationRules: [
            requiredRule("Street"),
            minLengthRule("Street", 3),
            maxLengthRule("Street", 30),
        ],
    },
};
