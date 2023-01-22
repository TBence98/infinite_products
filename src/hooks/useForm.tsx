import { useState, useEffect, useMemo } from "react";

import withUseForm from "../utils/withUseForm";
import Input from "../components/UI/Input";

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

    const FormInput = useMemo(() => {
        return withUseForm(Input, registerInput, onInputChange);
    }, []);

    return { isFormValid, formData, FormInput };
};

export default useForm;
