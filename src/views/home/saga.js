import { put, call, takeLatest } from 'redux-saga/effects'
import { FETCH_HOME_DATA, doReceiveHomeData } from '@/store/actions'
import serverRequest from '@/server/request'

function* fetchHomeDataAsync(action) {
  console.log(3)
  const data = yield call(serverRequest, action.payload)
  console.log(4)
  yield put(doReceiveHomeData(data))
}

export function* watchFetchHomeData() {
  yield takeLatest(FETCH_HOME_DATA, fetchHomeDataAsync)
}