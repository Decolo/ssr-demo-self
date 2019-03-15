import { put, call, takeLatest } from 'redux-saga/effects'
import { FETCH_HOME_DATA, doReceiveHomeData } from '@/store/actions'
import serverRequest from '@/server/request'

function* fetchHomeDataAsync(action) {
  const data = yield call(serverRequest, action.payload)
  yield put(doReceiveHomeData(data))
}

export function* watchFetchHomeData() {
  yield takeLatest(FETCH_HOME_DATA, fetchHomeDataAsync)
}