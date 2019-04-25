import * as actionTypes from './actionTypes';

// reducer with initial state
const initialState = {
  fetching: false,
  coupons: [],
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.VALIDATE_COUPON_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.VALIDATE_COUPON_SUCCESS:
      return { ...state, fetching: false, coupons: [...state.coupons, action.coupon] };
    case actionTypes.VALIDATE_COUPON_FAILED:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}