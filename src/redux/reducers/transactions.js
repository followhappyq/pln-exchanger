import {
  REMOVE_TRANSACTION,
  SET_TRANSACTIONS_LIST,
  SET_TOP_TRANSACTIONS,
  SET_TOP_TRANSACTIONS_LIST,
  SET_LARGEST_TRANSACTIONS_LIST,
} from "../actions/transactions"

const initialState = {
  transactions: [],
  top: 1,
  topTransactions: [],
  largestTrasactions: [],
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
    case SET_TOP_TRANSACTIONS_LIST:
      return {
        ...state,
        topTransactions: payload,
      }
    case SET_LARGEST_TRANSACTIONS_LIST:
      return {
        ...state,
        largestTrasactions: payload,
      }

    default:
      return state
  }
}
