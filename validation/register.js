//4. Validation of user entry of the registeration part of the application.
const Validator = require("validator");
const isEmpty = require("./is-empty");

//you'll be able to use this function from outside
module.exports = function validateRegisterInput(data) {
  //4a. create an object of errors
  let errors = {};

  //4i. you have to make these fields empty first unless they are not empty
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //4b. validate the length of the name in the data coming in between 2 and 30 chars.
  //------------name field checking
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    //4c. add the error message to the errors object of property name.
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //------------email field checking
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  //------------password field checking
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  //------------password2 field checking
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  //4d. return the errors object
  return {
    errors,
    isValid: isEmpty(errors) //4e. check to see if this empty but validator only checks for string so that's why we refer to the is-empty.js file for checking. (you could also use lodash)
  };
};
