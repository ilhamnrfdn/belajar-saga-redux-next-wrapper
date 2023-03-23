import { call, put, takeEvery } from "redux-saga/effects"
import {header as Env} from "@/global/env"
import {  resultUserData, actionsUserList } from "./action"


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(params = {}) {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_ROOT_API}user?page=${params.page}&limit=${params.limit}`
   
    const option = {
      headers: {
        ...Env.HEADERS
      }, 
      method: "GET"}
    // console.log(typeof process.env.HEADER_API)
    const user = yield call(fetch,endpoint, option )
    const response = yield user.json()
    yield put(resultUserData(yield response))

  } catch (e) {
    yield put({ type: actionsUserList.GET_USER_ERROR, message: e })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(actionsUserList.GET_USER_LIST, fetchUser)
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

export default mySaga