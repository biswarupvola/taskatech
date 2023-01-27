//https://www.regextester.com/99810
export const onlyNumbersAndSpaces = /^[0-9]*$/;

export const onlyNumbersAndSpecialCharracter = /^[0-9,]*$/;

//string check
export const onlyLettersAndSpaces = /^[A-Za-z\s]*$/;

//Mobile number check start with 8,9,6,7 digit check with min length 10
export const mobileValidation = /^(8|9|6|7)([0-9]){9}$/;

//email address check
export const emailValidation = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

export const urlCheck = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/