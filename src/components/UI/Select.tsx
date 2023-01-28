import React, { useState, useEffect } from "react";
import { SelectComponent } from "../../models/types";

import classes from "./Input.module.css";

const Select = (props: SelectComponent) => {
    const {
        label,
        name,
        handleChange,
        validationRules,
        registerInput,
        options,
        className,
    } = props;
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        registerInput(name);
    }, []);

    function handleInputChange(event: React.FormEvent<HTMLSelectElement>) {
        const { name, value } = event.target as HTMLSelectElement;

        if (value === options[0]) return;
        console.log(name);

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
                <label htmlFor={name} className={classes.label}>
                    {label}
                </label>
                <select
                    id={name}
                    onChange={handleInputChange}
                    defaultValue={options[0]}
                    name={name}
                >
                    {options.map((option, index) => {
                        if (index === 0) {
                            return (
                                <option key={option} disabled>
                                    {option}
                                </option>
                            );
                        } else {
                            return <option key={option}>{option}</option>;
                        }
                    })}
                </select>
            </p>
            {errorMessage && !isValid ? (
                <span className={classes["error-text"]}>{errorMessage}</span>
            ) : null}
        </>
    );
};

export default Select;
