import { all, fork } from "redux-saga/effects";
import homeSaga from "../Containers/Home/redux/saga";

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}

// fork(loginSaga), fork(signupSaga)
