import {
  call,
  put,
  takeLatest,
  select,
  all,
  fork,
  join,
} from "redux-saga/effects";
import {
  loadingHomePage,
  successHomePage,
  errorHomePage,
  resetHomePage,
} from ".";
import { getNasaImages } from "../../../services/apicall";

export function* HomeWidgetWorker(params: any): any {
  try {
    const earthdate = params.payload;
    const data = yield call(getNasaImages, earthdate);
    yield put(successHomePage(data));
  } catch (err: any) {
    yield put(errorHomePage(err));
  }
}

export default function* HomeWidgetSaga() {
  yield takeLatest(loadingHomePage.type, HomeWidgetWorker);
}
