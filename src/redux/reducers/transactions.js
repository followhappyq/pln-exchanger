import {
  REMOVE_TRANSACTION,
  SET_TRANSACTIONS_LIST,
} from "../actions/transactions"

const initialState = {
  transactions: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TRANSACTIONS_LIST:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      }

    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((obj) => obj._id !== payload),
      }

    default:
      return state
  }
}
