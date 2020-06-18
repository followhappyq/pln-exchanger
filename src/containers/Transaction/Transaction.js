import React, { useState } from "react"
import { connect } from "react-redux"

import { transactionsActions } from "../../redux/actions"
import { Transaction as BaseTransaction } from "../../components"

const Transactions = ({ setTransactionsList, transactions }) => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)

  const onTransactionAdded = (event) => {
    if (name.length > 0) {
      setTransactionsList([
        ...transactions,
        { _id: new Date().getTime(), title: name, euro: +amount },
      ])
      setName("")
      setAmount("")
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
    />
  )
}

export default connect(
  ({ transactions }) => ({
    transactions: transactions.transactions,
  }),
  transactionsActions
)(Transactions)
