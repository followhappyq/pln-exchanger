import React, { useState } from "react"
import { connect } from "react-redux"

import { transactionsActions } from "../../redux/actions"
import { Transaction as BaseTransaction } from "../../components"

const Transactions = ({ setTransactionsList, transactions }) => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState("")

  const onTransactionAdded = (event) => {
    if (name.length > 0 && +amount > 0) {
      setTransactionsList([
        ...transactions,
        { _id: new Date().getTime(), title: name, euro: +amount },
      ])
      setName("")
      setAmount("")
      setError("")
    } else {
      setError(
        "Transaction name can't be blank/Amount cannot be 0 or negative."
      )
    }
    event.preventDefault()
  }

  return (
    <BaseTransaction
      onNameChange={setName}
      onAmountChange={setAmount}
      onTransactionAdded={onTransactionAdded}
      name={name}
      amount={amount}
      error={error}
    />
  )
}

export default connect(
  ({ transactions }) => ({
    transactions: transactions.transactions,
  }),
  transactionsActions
)(Transactions)
