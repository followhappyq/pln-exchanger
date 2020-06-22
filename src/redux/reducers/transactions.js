import {
  REMOVE_TRANSACTION,
  SET_TRANSACTIONS_LIST,
  SET_TOP_TRANSACTIONS,
} from "../actions/transactions"

const initialState = {
  transactions: [],
  top: 1,
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
    case SET_TOP_TRANSACTIONS:
      return {
        ...state,
        top: payload,
      }

    default:
      return state
  }
}
