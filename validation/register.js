const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(inputData){

    let errors = {};

    inputData.name = !isEmpty(inputData.name) ? inputData.name : "";
    inputData.email = !isEmpty(inputData.email) ? inputData.email : "";
    inputData.password = !isEmpty(inputData.password) ? inputData.password : "";
    inputData.password2 = !isEmpty(inputData.password2) ? inputData.password2 : "";

    if(Validator.isEmpty(inputData.name)){
        errors.name = "You must enter name";
    }

    if(Validator.isEmpty(inputData.email)){
        errors.email = "You must enter email";
    }else if(!Validator.isEmail(inputData.email)){
        errors.email = "Please enter a valid email address";
    }

    if(Validator.isEmpty(inputData.password)){
        errors.password = "You must enter password";
    }

    if(Validator.isEmpty(inputData.password2)){
        errors.password2 = "You must enter the same password in Confirm Password";
    }

    if(!Validator.isLength(inputData.password, { min:6, max: 30})){
        errors.password = "You must enter minimum 6 characters password";
    }

    if(!Validator.equals(inputData.password,inputData.password2)){
        errors.password2 = "Confirm Password should match with Password";
    }

    return{
        errors,
        isValid : isEmpty(errors)
    };
};