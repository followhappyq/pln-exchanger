import React from "react"
import { connect } from "react-redux"

import { transactionsActions } from "../../redux/actions"
import { TransactionsList as BaseTransactionsList } from "../../components"

const TransactionsList = ({ transactions, rate, removeTransaction }) => {
  const transactionsList = [
    {
      title: "Transaction title",
      total: {
        pln: 42.3,
        euro: 10,
      },
    },
    {
      title: "Скинул бабки на карту тра та та",
      total: {
        pln: 42.3,
        euro: 10,
      },
    },
    {
      title: "Transaction title",
      total: {
        pln: 4400000000.3,
        euro: 101,
      },
    },
  ]
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
