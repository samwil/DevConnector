//4. Validation of user entry of the login part of the application.
const Validator = require("validator");
const isEmpty = require("./is-empty");

//you'll be able to use this function from outside
module.exports = function validateExperienceInput(data) {
  //4a. create an object of errors
  let errors = {};

  //4i. you have to make these fields empty first unless they are not empty
  //if a user doesn't enter anything these are not initialized as empty rather they are null or undefined so this makes sure they are empty if the user doesn't enter anything.
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //------------title field checking
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  //------------company field checking
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  //------------from field checking
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  //4d. return the errors object
  return {
    errors,
    isValid: isEmpty(errors) //4e. check to see if this empty but validator only checks for string so that's why we refer to the is-empty.js file for checking. (you could also use lodash)
  };
};
