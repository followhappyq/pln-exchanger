import React from "react"
import { connect } from "react-redux"

import { transactionsActions } from "../../redux/actions"
import { TransactionsList as BaseTransactionsList } from "../../components"

const TransactionsList = ({ transactions, rate, removeTransaction }) => {
  return (
    <BaseTransactionsList
      transactionsList={transactions}
      rate={rate}
      removeTransaction={removeTransaction}
    />
  )
}

export default connect(
  ({ transactions, exchangeRate }) => ({
    transactions: transactions.transactions,
    rate: exchangeRate.rate,
  }),
  transactionsActions
)(TransactionsList)
