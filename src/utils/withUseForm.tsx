import {
    HandleChange,
    RegisterInput,
    BasicTextInputProps,
    BasicSelectInputProps,
} from "../models/types";

const withUseForm = <T extends BasicTextInputProps | BasicSelectInputProps>(
    WrappedComponent: React.FunctionComponent<
        T & { handleChange: HandleChange; registerInput: RegisterInput }
    >,
    registerInput: RegisterInput,
    handleChange: HandleChange
) => {
    const WithUseForm = (props: any) => {
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
