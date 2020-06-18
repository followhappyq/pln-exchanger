const initialState = {
  transactions: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TRANSACTIONS:SET_TRANSACTIONS_LIST":
      return {
        ...state,
        transactions: payload,
      }
    case "TRANSACTIONS:REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((obj) => obj._id !== payload),
      }

    default:
      return state
  }
}
