const actions = {
  setExchangeRate: (rate) => ({
    type: "EXCHANGE_RATE:SET_EXCHANGE_RATE",
    payload: rate,
  }),
}

export default actions
