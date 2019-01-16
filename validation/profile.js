//4. Validation of user entry of the login part of the application.
const Validator = require("validator");
const isEmpty = require("./is-empty");

//you'll be able to use this function from outside
module.exports = function validateProfileInput(data) {
  //4a. create an object of errors
  let errors = {};

  //4i. you have to make these fields empty first unless they are not empty
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  //------------handle field checking
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  //------------status field checking
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  //------------skills field checking
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  //------------website field checking
  if (!isEmpty(data.website)) {
    //this field is not required but we have to check if it's not empty first before we validate.
    if (!Validator.isURL(data.website)) {
      //check if it's formated for url field
      errors.website = "Not a valid URL";
    }
  }

  //------------social network fields checking
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  //4d. return the errors object
  return {
    errors,
    isValid: isEmpty(errors) //4e. check to see if this empty but validator only checks for string so that's why we refer to the is-empty.js file for checking. (you could also use lodash)
  };
};
