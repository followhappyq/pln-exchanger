const initialState = {
  rate: 4.3,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "EXCHANGE_RATE:SET_EXCHANGE_RATE":
      return {
        ...state,
        rate: payload,
      }

    default:
      return state
  }
}
