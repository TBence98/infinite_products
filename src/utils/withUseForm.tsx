import {
    HandleChange,
    RegisterInput,
    InputComponent,
    BasicInputProps,
} from "../models/types";

const withUseForm = (
    WrappedComponent: React.FunctionComponent<InputComponent>,
    registerInput: RegisterInput,
    handleChange: HandleChange
) => {
    const WithUseForm = (props: BasicInputProps) => {
        return (
            <WrappedComponent
                registerInput={registerInput}
                handleChange={handleChange}
                {...props}
            />
        );
    };

    return WithUseForm;
};

export default withUseForm;
