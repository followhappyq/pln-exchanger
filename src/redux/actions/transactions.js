export const REMOVE_TRANSACTION = "TRANSACTIONS:REMOVE_TRANSACTION"
export const SET_TRANSACTIONS_LIST = "TRANSACTIONS:SET_TRANSACTIONS_LIST"
export const SET_TOP_TRANSACTIONS = "TRANSACTIONS:SET_TOP_TRANSACTIONS"
export const SET_TOP_TRANSACTIONS_LIST =
  "TRANSACTIONS:SET_TOP_TRANSACTIONS_LIST"
export const SET_LARGEST_TRANSACTIONS_LIST =
  "TRANSACTIONS:SET_LARGEST_TRANSACTIONS_LIST"

export const setTransactionsList = (transaction) => ({
  type: SET_TRANSACTIONS_LIST,
  payload: transaction,
})

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  payload: id,
})

export const setTopTransactionsList = (transactions) => ({
  type: SET_TOP_TRANSACTIONS_LIST,
  payload: transactions,
})

export const setLargestTransactions = (transactions) => ({
  type: SET_LARGEST_TRANSACTIONS_LIST,
  payload: transactions,
})

export const setTopTransactions = (top) => ({
  type: SET_TOP_TRANSACTIONS,
  payload: top,
})
