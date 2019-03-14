import { all } from 'redux-saga/effects'
import { watchFetchHomeData } from  '@/views/home/saga'

export default function* rootSaga() {
  yield all([watchFetchHomeData()])
}