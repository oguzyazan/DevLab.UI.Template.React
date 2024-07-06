import { takeEvery, call, put, select } from "redux-saga/effects";
import { callLoginAPI } from "../../../api";
import { loginResponse, registerResponse } from "../../actions";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../constants";
import { callRegisterApi } from "../../../api/Auth";

const getLoginState = (state) => state.loginReducer;
const getRegisterState = (state) => state.registerReducer;

function* login() {
  const state = yield select(getLoginState);
  const response = yield call(callLoginAPI, state.requestBody);
  yield put(loginResponse(response));
}

function* register() {
  const state = yield select(getRegisterState);
  const response = yield call(callRegisterApi, state.requestBody);
  yield put(registerResponse(response));
}

export default function* watchLoginRequests(){
    yield takeEvery(LOGIN_REQUEST, login)
    yield takeEvery(REGISTER_REQUEST, register)
}
