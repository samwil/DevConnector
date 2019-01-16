//4. Validation of user entry of the login part of the application.
const Validator = require("validator");
const isEmpty = require("./is-empty");

//you'll be able to use this function from outside
module.exports = function validateEducationInput(data) {
  //4a. create an object of errors
  let errors = {};

  //4i. you have to make these fields empty first unless they are not empty
  //if a user doesn't enter anything these are not initialized as empty rather they are null or undefined so this makes sure they are empty if the user doesn't enter anything.
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //------------school field checking
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  //------------degree field checking
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  //------------fieldofstudy field checking
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
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
