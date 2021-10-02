const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(inputData){

    let errors = {};

    inputData.email = !isEmpty(inputData.email) ? inputData.email : "";
    inputData.password = !isEmpty(inputData.password) ? inputData.password : "";

    if(Validator.isEmpty(inputData.email)){
        errors.email = "You must enter email";
    }else if(!Validator.isEmail(inputData.email)){
        errors.email = "Please enter a valid email address";
    }

    if(Validator.isEmpty(inputData.password)){
        errors.password = "You must enter password";
    }

    return{
        errors,
        isValid : isEmpty(errors)
    };
}