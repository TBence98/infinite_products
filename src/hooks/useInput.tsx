import { useState, useCallback, useEffect } from "react";
import { FormConfig, Input } from "../models/types";

const useInput = (formConfig: FormConfig) => {
    const [form, setForm] = useState(formConfig);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateForm());
    });

    const renderFormInputs = () => {
        return Object.values(form).map((inputObj) => {
            const { value, label, errorMessage, valid, renderInput } = inputObj;
            return renderInput(
                onInputChange,
                value,
                valid,
                errorMessage,
                label
            );
        });
    };

    const isValidInput = useCallback((inputField: Input) => {
        for (const rule of inputField.validationRules) {
            if (!rule.validate(inputField.value)) {
                inputField.errorMessage = rule.message;
                return false;
            }
        }
        return true;
    }, []);

    const validateForm = () => {
        for (let input in form) {
            if (!form[input].valid) {
                return false;
            }
        }
        return true;
    };

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;

        const inputObj = { ...form[name] };

        inputObj.value = value;
        inputObj.valid = isValidInput(inputObj);

        inputObj.touched = true;

        setForm((prevForm) => {
            return { ...prevForm, [name]: inputObj };
        });
    };

    return { renderFormInputs, isFormValid };
};

export default useInput;
