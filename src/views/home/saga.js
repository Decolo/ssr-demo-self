import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_HOME_DATA, doReceiveHomeData } from '@/store/actions'
import { api } from '@/api'
import serverRequest from '@/server/request'

function* fetchHomeDataAsync(action) {
  const params = {
    ...api['fetchHomeList']
  }
  const data = yield call(serverRequest, params)

  if (!data) {
    return
  }
  yield put(doReceiveHomeData(data))
}

export function* watchFetchHomeData() {
  yield takeEvery(FETCH_HOME_DATA, fetchHomeDataAsync)
}