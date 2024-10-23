export function isEmail(value) {
    const emailPattern =
        /^[\w-.]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

export function isNotEmpty(value) {
    return value.trim() !== "";
}

export function capitalize(param) {
    if(param?.length > 0){
        let result = param.charAt(0).toUpperCase() + param.slice(1);
        return result;
    }else{return ''};
}
