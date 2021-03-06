export const REMOVE_TRANSACTION = "TRANSACTIONS:REMOVE_TRANSACTION"
export const SET_TRANSACTIONS_LIST = "TRANSACTIONS:SET_TRANSACTIONS_LIST"
export const SET_TOP_TRANSACTIONS = "TRANSACTIONS:SET_TOP_TRANSACTIONS"

export const setTransactionsList = (transaction) => ({
  type: SET_TRANSACTIONS_LIST,
  payload: transaction,
})

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  payload: id,
})

export const setTopTransactions = (top) => ({
  type: SET_TOP_TRANSACTIONS,
  payload: top,
})
