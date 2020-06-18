export const SET_EXCHANGE_RATE = "EXCHANGE_RATE:SET_EXCHANGE_RATE"

export const setExchangeRate = (rate) => ({
  type: SET_EXCHANGE_RATE,
  payload: rate,
})
