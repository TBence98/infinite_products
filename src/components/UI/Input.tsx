import React, { useState, useEffect } from "react";
import { InputComponent } from "../../models/types";

import classes from "./Input.module.css";

const Input = (props: InputComponent) => {
    const {
        label,
        type,
        name,
        handleChange,
        validationRules,
        registerInput,
        className,
    } = props;
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        registerInput(name);
    }, []);

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        const { name, value } = event.target as HTMLInputElement;
        const validationData = validateInput(value);
        setIsValid(validationData.isValid);
        setErrorMessage(validationData.errorMessage);
        handleChange(
            name,
            value,
            validationData.isValid,
            validationData.errorMessage
        );
    }

    function validateInput(inputValue: string) {
        if (validationRules && validationRules.length > 0) {
            for (const rule of validationRules) {
                if (!rule.validate(inputValue)) {
                    return {
                        isValid: false,
                        errorMessage: rule.message,
                    };
                }
            }
        }
        return {
            isValid: true,
            errorMessage: "",
        };
    }

    return (
        <>
            <p
                className={`${classes["input-container"]} ${
                    errorMessage && !isValid
                        ? classes["input-container--error"]
                        : ""
                }`}
            >
                <label className={classes.label}>{label}</label>
                <input
                    className={`${classes.input} ${className ? className : ""}`}
                    type={type}
                    name={name}
                    onChange={handleInputChange}
                />
            </p>
            {errorMessage && !isValid ? (
                <span className={classes["error-text"]}>{errorMessage}</span>
            ) : null}
        </>
    );
};

export default Input;
