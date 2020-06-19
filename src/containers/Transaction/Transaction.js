import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { setTransactionsList } from "../../redux/actions/transactions"
import { Transaction as BaseTransaction } from "../../components"

const Transactions = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState("")

  const dispatch = useDispatch()

  const onSetTransactionsList = (transaction) => {
    dispatch(setTransactionsList(transaction))
  }

  const onSetName = (value) => {
    setName(value)
  }

  const onSetAmount = (value) => {
    setAmount(value)
  }

  const onTransactionAdded = (event) => {
    event.preventDefault()
    if (name.length > 0 && Number(amount) > 0) {
      onSetTransactionsList({
        _id: new Date().getTime(),
        title: name,
        euro: Number(amount),
      })
      setName("")
      setAmount(0)
      setError("")
    } else {
      setError(
        "Transaction name can't be blank/Amount cannot be 0 or negative."
      )
    }
  }

  return (
    <BaseTransaction
      onNameChange={onSetName}
      onAmountChange={onSetAmount}
      onTransactionAdded={onTransactionAdded}
      name={name}
      amount={amount}
      error={error}
    />
  )
}

export default Transactions
