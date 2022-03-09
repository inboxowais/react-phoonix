export const regex = {
    wholeNumber: /^\d+$/,
    decimalNumber: /^[0-9.]{1,999}$/,
    wholeNumberAndDecimalNumber: /^\d*(\.\d+)?$/,
    alphanumericSpecifiedSpecialCharaters : /^[ A-Z0-9 @,_]*$/i,
    alphanumericWithDash : /^[A-Za-z0-9-]{1,999}$/,
    alphanumericWithOutSpaceTextField: /^[a-zA-Z0-9]{1,999}$/,
    alphanumericWithOutSpace: /^[a-zA-Z0-9]{1,16}$/,
    usernameRegex: /^(?=.*[A-Za-z])[A-Za-z\d@_.]{5,20}$/,
    // usernameRegex: /^(?=.*[A-Za-z])[A-Za-z\d@_.-_\s]{5,20}$/,
    alphanumericWithSpace: /^[a-z\d\-_\s]+$/i,
     // /^\d*[a-zA-Z][a-zA-Z0-9]*$/
    email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    passwordStrengthModerate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
    passwordStrengthComplex: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{3,}/,
    alphanumericString: /^[a-z0-9_-]{3,16}$/,
    date: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    time24Hour: /^$|^(([01][0-9])|(2[0-3])):[0-5][0-9]$/,
    time12Hour: /^(0?[1-9]|1[0-2]):[0-5][0-9]$/,
    filePathWithFileNameAndExtension: /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/,
    englishAndFinnishCharacters: /^[a-zA-ZÀ-ÿ ]+$/,
    isNotEmpty: /^\s*\S+.*/,
    cnicNumber: /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/,
    soneriCnicNumber: /^[0-9+]{5}[0-9+]{7}[0-9]{1}$/,
    soneriNicopNumber: /^[0-9+]{5}[0-9+]{7}[0-9]{1}$/,
    passportNumber: /^(?!^0+$)[a-zA-Z0-9]{3,20}$/,
    porNumber: /^[a-zA-Z0-9]{3,16}$/,
    pocNumber: /^[a-zA-Z0-9]{3,16}$/,
    ntnNumber: /^\d{8}$/,
    soneriAccountNumber : /^\d{11,16}$/,//TODO TEST AND CONFIRM
    accountNumber: /[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{4}[0-9]{16}/,
    pinNumber: /^\d{6}$/,
    amount: /^\d{1,9}(\.\d{1,2})?$/,
    phoneNumber: /^\d{11}$/,
    otpNumber: /^\d{4}$/,
    oneto24Hour: /^(2[0-3]|1[0-9]|[1-9]|0|0[1-9])$/,
    zerotofiftynineminutes: /^[1-5]?[0-9]$/,
};
  
    /*
  
  wholenumber : accepts whole numbers only
  decimalnumbers : accepts decimal numbers only
  wholenumberanddecimalnumber : accepts whole number and decimal numbers
  alphanumericWithOutSpace : accepts alphanumeric keywords without space
  email : accepts string having email
  passwordStrengthModerate : Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
  passwordStrengthComplex :  1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
  alphanumericString :  may include _ and – having a length of 3 to 16 characters
  date : date in format YYYY-MM-DD
  time24Hour : HH:MM 24 hour format
  time12Hour : HH:MM 12 hour format
  filePath : filepath string
  englishandfinnishcharacters : accepts english and finnish characters
  isNotEmpty : If string is empty , condition will not be true
  
  */
  
  