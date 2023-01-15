import Card from "../../components/UI/Card";
import useForm from "../../hooks/useForm";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    atSignRule,
} from "../../utils/inputValidationRules";

import classes from "./OrderForm.module.css";

const Form = () => {
    const { isFormValid, formData, FormInput } = useForm(Input);
    console.log(formData);
    return (
        <Card className={classes.order_form}>
            <h1 className={classes.title}>Order Product</h1>
            <form>
                <FormInput
                    label="First Name"
                    type="text"
                    name="First Name"
                    validationRules={[
                        requiredRule("First Name"),
                        minLengthRule("First Name", 3),
                    ]}
                />
                <FormInput
                    label="Last Name"
                    type="text"
                    name="Last Name"
                    validationRules={[
                        requiredRule("Last Name"),
                        minLengthRule("Last Name", 3),
                    ]}
                />
                <FormInput
                    label="Email"
                    type="email"
                    name="Email"
                    validationRules={[
                        requiredRule("Email"),
                        minLengthRule("Email", 10),
                        atSignRule("Email"),
                    ]}
                />
                <FormInput
                    label="Postal Code"
                    type="text"
                    name="Postal Code"
                    className={classes.postal_code}
                    validationRules={[
                        requiredRule("Postal Code"),
                        minLengthRule("Postal Code", 4),
                        maxLengthRule("Postal Code", 4),
                    ]}
                />
                <Button
                    className={classes.order_btn}
                    type="submit"
                    disabled={!isFormValid}
                >
                    Order
                </Button>
            </form>
        </Card>
    );
};

export default Form;
