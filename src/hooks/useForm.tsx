import { useState, useEffect, useMemo } from "react";

import withUseForm from "../utils/withUseForm";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import { BasicTextInputProps, BasicSelectInputProps } from "../models/types";

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

    const removeFormInputs = (inputs: string[]) => {
        const modifiedFormData = { ...formData };
        for (let input of inputs) {
            delete modifiedFormData[input];
        }

        setFormData(modifiedFormData);
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
        return withUseForm<BasicTextInputProps>(
            Input,
            registerInput,
            onInputChange
        );
    }, []);

    const FormSelect = useMemo(() => {
        return withUseForm<BasicSelectInputProps>(
            Select,
            registerInput,
            onInputChange
        );
    }, []);

    return { isFormValid, formData, FormInput, FormSelect, removeFormInputs };
};

export default useForm;
