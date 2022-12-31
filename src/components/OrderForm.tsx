import { useState, useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import classes from "./UserForm.module.css";
import { FormEvent } from "react";

const Form = () => {
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const firstName = firstNameRef.current!.value;
        const lastName = lastNameRef.current!.value;

        //validate firtName
        if (firstName.trim().length === 0) {
            setFirstNameError("First name can't be empty");
            return;
        }
        if (firstName.trim().length <= 3) {
            setFirstNameError(
                "First name should contain at least 4 characters"
            );
            return;
        }
        //validate firtName
        if (firstName.trim().length === 0) {
            setFirstNameError("First name can't be empty");
            return;
        }
        if (firstName.trim().length <= 3) {
            setFirstNameError(
                "First name should contain at least 4 characters"
            );
            return;
        }
        //validate lastName
        if (lastName.trim().length === 0) {
            setLastNameError("Last name can't be empty");
            return;
        }
        if (lastName.trim().length <= 3) {
            setLastNameError("Last name should contain at least 4 characters");
            return;
        }

        console.log("Successful submit!");
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);

        firstNameRef.current!.value = "";
        lastNameRef.current!.value = "";
    };

    return (
        <Card className={classes.user_form}>
            <h1>Order Product</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="first-name">First Name </label>
                {firstNameError ? (
                    <p className={classes.invalid_message}>{firstNameError}</p>
                ) : null}
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    ref={firstNameRef}
                    className={`${firstNameError ? classes.invalid_field : ""}`}
                />
                <label htmlFor="last-name">Last Name </label>
                {lastNameError ? (
                    <p className={classes.invalid_message}>{lastNameError}</p>
                ) : null}
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    ref={lastNameRef}
                    className={`${lastNameError ? classes.invalid_field : ""}`}
                />
                <Button type="submit">Order</Button>
            </form>
        </Card>
    );
};

export default Form;
