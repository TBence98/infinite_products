import { useState, useEffect } from "react";

interface Input {
    isValid: boolean;
    value: string;
    errorMessage: string;
}

interface FormData {
    [inputName: string]: Input;
}

const useForm = () => {
    const [formData, setFormData] = useState<FormData>({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            setIsFormValid(validateForm());
        }
    }, [formData]);

    const validateForm = () => {
        for (let input in formData) {
            if (!formData[input].isValid) {
                return false;
            }
        }
        return true;
    };

    const registerInput = (name: string) => {
        const inputObj = {
            value: "",
            isValid: false,
            errorMessage: "",
        };

        setFormData((prevForm) => {
            return { ...prevForm, [name]: inputObj };
        });
    };

    const onInputChange = (
        name: string,
        value: string,
        isValid: boolean,
        errorMessage: string
    ) => {
        const inputObj = { ...formData[name] };
        inputObj.value = value;
        inputObj.isValid = isValid;
        inputObj.errorMessage = errorMessage;

        setFormData((prevForm) => {
            return { ...prevForm, [name]: inputObj };
        });
    };

    return { onInputChange, isFormValid, formData, registerInput };
};

export default useForm;
