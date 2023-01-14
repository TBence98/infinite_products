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
    const { onInputChange, isFormValid, formData, registerInput } = useForm();
    console.log(formData);
    return (
        <Card className={classes.order_form}>
            <h1 className={classes.title}>Order Product</h1>
            <form>
                <Input
                    label="First Name"
                    type="text"
                    name="First Name"
                    handleChange={onInputChange}
                    registerInput={registerInput}
                    validationRules={[
                        requiredRule("First Name"),
                        minLengthRule("First Name", 3),
                    ]}
                />
                <Input
                    label="Last Name"
                    type="text"
                    name="Last Name"
                    handleChange={onInputChange}
                    registerInput={registerInput}
                    validationRules={[
                        requiredRule("Last Name"),
                        minLengthRule("Last Name", 3),
                    ]}
                />
                <Input
                    label="Email"
                    type="email"
                    name="Email"
                    handleChange={onInputChange}
                    registerInput={registerInput}
                    validationRules={[
                        requiredRule("Email"),
                        minLengthRule("Email", 10),
                        atSignRule("Email"),
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
