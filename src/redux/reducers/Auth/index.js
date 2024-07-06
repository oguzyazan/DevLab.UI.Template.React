import { LOGIN_REQUEST, LOGIN_RESPONSE, REGISTER_REQUEST, REGISTER_RESPONSE } from "../../constants";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, requestBody: action.requestBody };
    case LOGIN_RESPONSE:
      return { response: action.response, loading: false };
    default:
      return state;
  }
};

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true, requestBody: action.requestBody };
    case REGISTER_RESPONSE:
      return { response: action.response, loading: false };
    default:
      return state;
  }
};
export { loginReducer, registerReducer };
