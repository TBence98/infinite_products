import Card from "./UI/Card";
import useInput from "../hooks/useInput";
import { orderForm } from "../utils/orderFormConfig";

import classes from "./OrderForm.module.css";

const Form = () => {
    const { renderFormInputs, isFormValid } = useInput(orderForm);
    return (
        <Card className={classes.user_form}>
            <h1>Order Product</h1>
            <form>
                {renderFormInputs()}
                <button type="submit" disabled={!isFormValid}>
                    Order
                </button>
            </form>
        </Card>
    );
};

export default Form;
