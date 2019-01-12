//4. Validation of user entry of the login part of the application.
const Validator = require("validator");
const isEmpty = require("./is-empty");

//you'll be able to use this function from outside
module.exports = function validateLoginInput(data) {
  //4a. create an object of errors
  let errors = {};

  //4i. you have to make these fields empty first unless they are not empty
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //------------email field checking
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  //------------password field checking
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  //4d. return the errors object
  return {
    errors,
    isValid: isEmpty(errors) //4e. check to see if this empty but validator only checks for string so that's why we refer to the is-empty.js file for checking. (you could also use lodash)
  };
};
