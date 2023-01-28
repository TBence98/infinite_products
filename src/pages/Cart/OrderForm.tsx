import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import Button from "../../components/UI/Button";
import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    atSignRule,
} from "../../utils/inputValidationRules";

import classes from "./OrderForm.module.css";

const Form = ({ goToNextPhase }: { goToNextPhase: () => void }) => {
    const [invoiceToCompany, setInvoiceToCompany] = useState(false);
    const [isSameAsBilling, setIsSameAsBilling] = useState(true);
    const { isFormValid, formData, FormInput, FormSelect, removeFormInputs } =
        useForm();
    console.log(formData);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        goToNextPhase();
    }

    useEffect(() => {
        console.log(invoiceToCompany);
        console.log(isSameAsBilling);
    }, [invoiceToCompany, isSameAsBilling]);

    function checkboxHandler(
        event: React.ChangeEvent<HTMLInputElement>,
        toBeRemovedInputs: string[],
        setState: React.Dispatch<React.SetStateAction<boolean>>,
        removeIfChecked: boolean
    ) {
        const isChecked = event.target.checked;

        if (!isChecked && !removeIfChecked) {
            removeFormInputs(toBeRemovedInputs);
        } else if (isChecked && removeIfChecked) {
            removeFormInputs(toBeRemovedInputs);
        }

        toggleCheckBoxState(setState);
    }

    function toggleCheckBoxState(
        setState: React.Dispatch<React.SetStateAction<boolean>>
    ) {
        setState((prevState) => !prevState);
    }

    return (
        <form onSubmit={submitHandler} className={classes.order_form}>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Contact Info</legend>
                <FormInput
                    label="Name and Surname"
                    type="text"
                    name="name"
                    validationRules={[
                        requiredRule("Name"),
                        minLengthRule("Name", 3),
                    ]}
                />
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    validationRules={[
                        requiredRule("Email"),
                        minLengthRule("Email", 10),
                        atSignRule("Email"),
                    ]}
                />
                <FormInput
                    label="Mobile"
                    type="tel"
                    name="mobile"
                    validationRules={[
                        requiredRule("Mobile"),
                        minLengthRule("Mobile", 3),
                    ]}
                />
            </fieldset>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Billing Address</legend>
                <p className={classes.checkbox_container}>
                    <label
                        htmlFor="company_invoice"
                        className={classes.checkbox_label}
                    >
                        Issue invoice to company
                    </label>
                    <input
                        type="checkbox"
                        id="company_invoice"
                        defaultChecked={invoiceToCompany}
                        onChange={(e) =>
                            checkboxHandler(
                                e,
                                ["company", "tax number", "vat id"],
                                setInvoiceToCompany,
                                false
                            )
                        }
                    />
                </p>
                <FormInput
                    label="Street"
                    type="text"
                    name="street"
                    validationRules={[
                        requiredRule("Street"),
                        minLengthRule("Street", 3),
                    ]}
                />
                <FormInput
                    label="Postal Code"
                    type="text"
                    name="postal code"
                    className={classes.postal_code}
                    validationRules={[
                        requiredRule("Postal Code"),
                        minLengthRule("Postal Code", 4),
                        maxLengthRule("Postal Code", 4),
                    ]}
                />
                <FormInput
                    label="City"
                    type="text"
                    name="city"
                    className={classes.city}
                    validationRules={[
                        requiredRule("City"),
                        minLengthRule("City", 3),
                    ]}
                />
                <FormSelect
                    label="Country"
                    name="country"
                    validationRules={[requiredRule("Country")]}
                    options={[
                        "--Select your country",
                        "Hungary",
                        "Germany",
                        "France",
                        "Slovakia",
                        "Czech Republic",
                    ]}
                />
                {invoiceToCompany ? (
                    <>
                        <FormInput
                            label="Company"
                            type="text"
                            name="company"
                            validationRules={[
                                requiredRule("Company"),
                                minLengthRule("Company", 3),
                            ]}
                        />
                        <FormInput
                            label="Tax number"
                            type="text"
                            name="tax number"
                            validationRules={[
                                requiredRule("Tax number"),
                                minLengthRule("Tax number", 3),
                            ]}
                        />
                        <FormInput
                            label="VAT ID"
                            type="text"
                            name="vat id"
                            validationRules={[
                                requiredRule("VAT ID"),
                                minLengthRule("VAT ID", 3),
                            ]}
                        />
                    </>
                ) : null}
            </fieldset>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Shipping address</legend>
                <p className={classes.checkbox_container}>
                    <label
                        htmlFor="shipping address"
                        className={classes.checkbox_label}
                    >
                        Same as billing
                    </label>
                    <input
                        type="checkbox"
                        id="shipping address"
                        defaultChecked={isSameAsBilling}
                        onChange={(e) =>
                            checkboxHandler(
                                e,
                                [
                                    "shipping name",
                                    "shipping street",
                                    "shipping postal code",
                                    "shipping city",
                                    "shipping mobile",
                                    "shipping country",
                                ],
                                setIsSameAsBilling,
                                true
                            )
                        }
                    />
                </p>
                {isSameAsBilling ? null : (
                    <>
                        <FormInput
                            label="Name and surname (company)"
                            type="text"
                            name="shipping name"
                            validationRules={[
                                requiredRule("Name and surname"),
                                minLengthRule("Name and surname", 3),
                            ]}
                        />
                        <FormInput
                            label="Street"
                            type="text"
                            name="shipping street"
                            validationRules={[
                                requiredRule("Street"),
                                minLengthRule("Street", 3),
                            ]}
                        />
                        <FormInput
                            label="Postal Code"
                            type="text"
                            name="shipping postal code"
                            className={classes.postal_code}
                            validationRules={[
                                requiredRule("Postal Code"),
                                minLengthRule("Postal Code", 4),
                                maxLengthRule("Postal Code", 4),
                            ]}
                        />
                        <FormInput
                            label="City"
                            type="text"
                            name="shipping city"
                            className={classes.city}
                            validationRules={[
                                requiredRule("City"),
                                minLengthRule("City", 3),
                            ]}
                        />
                        {/* <p className={classes.select_container}>
                            <label
                                htmlFor="shipping_country"
                                className={classes.select_label}
                            >
                                Country
                            </label>
                            <select
                                id="shipping_country"
                                className={classes.select}
                            >
                                <option value="">--Select your country</option>
                                <option value="hungary">Hungary</option>
                                <option value="germany">Germany</option>
                                <option value="france">France</option>
                                <option value="slovakia">Slovakia</option>
                                <option value="czech republic">
                                    Czech Republic
                                </option>
                            </select>
                        </p> */}
                        <FormSelect
                            label="Country"
                            name="shipping country"
                            validationRules={[requiredRule("Country")]}
                            options={[
                                "--Select your country",
                                "Hungary",
                                "Germany",
                                "France",
                                "Slovakia",
                                "Czech Republic",
                            ]}
                        />
                        <FormInput
                            label="Mobile"
                            type="tel"
                            name="shipping mobile"
                            validationRules={[
                                requiredRule("Mobile"),
                                minLengthRule("Mobile", 3),
                            ]}
                        />
                    </>
                )}
            </fieldset>
            <Button
                className={classes.order_btn}
                type="submit"
                disabled={!isFormValid}
            >
                Order
            </Button>
        </form>
    );
};

export default Form;
