import { APIHelper } from "../../util/helpers";

export const callLoginAPI = (body) => {
  const options = APIHelper.createOptions("POST", body);
  const response = APIHelper.callAPI("/user/login", options);
  return response;
};

export const callRegisterApi = (body) => {
  const options = APIHelper.createOptions("POST", body);
  const response = APIHelper.callAPI("/user/register", options);
  return response;
};
