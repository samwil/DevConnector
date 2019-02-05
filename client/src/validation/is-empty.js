//4e. create the isEmpty global function for all possible input
const isEmpty = value =>
  value === undefined ||
  value === null ||
  //check for empty object
  (typeof value === "object" && Object.keys(value).length === 0) ||
  //check for empty string
  (typeof value === "string" && value.trim().length === 0);

export default isEmpty;
