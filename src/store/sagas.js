import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './actionTypes';

export function* watcherSaga() {
  yield takeLatest(actionTypes.VALIDATE_COUPON_REQUEST, workerSaga);
}

function* workerSaga({ digit, code }) {
  try {
    const response = yield call(() => axios(`http://localhost:4000/coupons?digit_like=${digit}&code_like=${code}`));
    const coupon = response.data[0];
    // if there is a coupon just put it into state otherwise put error message
    if (coupon) {
      yield put({ type: actionTypes.VALIDATE_COUPON_SUCCESS, coupon });
    } else {
      yield put({ type: actionTypes.VALIDATE_COUPON_FAILED, error: 'Invalid code. Try 1234567890123456789 and qwer :)' });
    }
  } catch (error) {
    yield put({ type: actionTypes.VALIDATE_COUPON_FAILED, error: 'Server Error please make sure json-server is running.' });
  }
}