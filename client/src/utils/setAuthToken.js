//this function when called will attatch the authorization to the header.
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
