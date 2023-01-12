import React from "react";
import { InputComponent } from "../../models/types";

import classes from "./Input.module.css";

const Input = (props: InputComponent) => {
    const { label, type, name, handleChange, errorMessage, isValid, value } =
        props;
    return (
        <p className={classes["input-container"]}>
            <label className={classes.label}>{label}</label>
            <input
                className={classes.input}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
            <span className={classes["error-text"]}>
                {errorMessage && !isValid ? errorMessage : ""}
            </span>
        </p>
    );
};

export default Input;
