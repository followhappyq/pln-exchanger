import { SET_EXCHANGE_RATE } from "../actions/exchangeRate"

const initialState = {
  rate: 4.3,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EXCHANGE_RATE:
      return {
        ...state,
        rate: payload,
      }

    default:
      return state
  }
}
