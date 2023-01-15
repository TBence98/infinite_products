const withUseForm = (
    WrappedComponent: any,
    registerInput: any,
    handleChange: any
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
