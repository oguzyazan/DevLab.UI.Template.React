import { LOGIN_REQUEST, LOGIN_RESPONSE, REGISTER_REQUEST, REGISTER_RESPONSE } from "../../constants/index";

export const loginRequest = (requestBody, onSuccess, onFailure, showMessageDialog) => ({
  type: LOGIN_REQUEST,
  requestBody,
  onSuccess, //?
  onFailure, //?
  showMessageDialog
});

export const loginResponse = (response) => ({
  type: LOGIN_RESPONSE,
  response,
});

export const registerRequest = (requestBody, onSuccess, onFailure, showMessageDialog) => ({
  type: REGISTER_REQUEST,
  requestBody,
  onSuccess, //?
  onFailure, //?
  showMessageDialog
});

export const registerResponse = (response) => ({
  type: REGISTER_RESPONSE,
  response,
});
