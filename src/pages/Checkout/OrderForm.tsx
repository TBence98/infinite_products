import Card from "../../components/UI/Card";
import useInput from "../../hooks/useInput";
import Button from "../../components/UI/Button";
import { orderForm } from "../../utils/orderFormConfig";

import classes from "./OrderForm.module.css";

const Form = () => {
    const { renderFormInputs, isFormValid } = useInput(orderForm);
    return (
        <Card className={classes.order_form}>
            <h1 className={classes.title}>Order Product</h1>
            <form>
                {renderFormInputs()}
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
