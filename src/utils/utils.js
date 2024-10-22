export function isEmail(value) {
    const emailPattern =
        /^[\w-.]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

export function isNotEmpty(value) {
    return value.trim() !== "";
}
