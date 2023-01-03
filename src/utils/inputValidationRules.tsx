function createValidationRule(
    ruleName: string,
    errorMessage: string,
    validateFunc: (value: string) => boolean
) {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc,
    };
}

export function requiredRule(inputName: string) {
    return createValidationRule(
        "required",
        `${inputName} required`,
        (inputValue) => inputValue.length !== 0
    );
}

export function minLengthRule(inputName: string, minCharacters: number) {
    return createValidationRule(
        "minLength",
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue) => inputValue.length >= minCharacters
    );
}

export function maxLengthRule(inputName: string, maxCharacters: number) {
    return createValidationRule(
        "minLength",
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue) => inputValue.length <= maxCharacters
    );
}

export function atSignRule(inputName: string) {
    return createValidationRule(
        "atSign",
        `${inputName} should contain @ sign`,
        (inputValue) => inputValue.includes("@")
    );
}
