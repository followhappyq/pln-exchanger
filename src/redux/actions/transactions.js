const actions = {
  setTransactionsList: (transaction) => ({
    type: "TRANSACTIONS:SET_TRANSACTIONS_LIST",
    payload: transaction,
  }),
  removeTransaction: (id) => ({
    type: "TRANSACTIONS:REMOVE_TRANSACTION",
    payload: id,
  }),
}

export default actions
