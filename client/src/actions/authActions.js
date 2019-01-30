import { TEST_DISPATCH } from "./types";

//Rgister User
export const registeruser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
