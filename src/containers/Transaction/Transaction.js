import React, { useState } from "react"

import { Transaction as BaseTransaction } from "../../components"

const Transactions = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)

  const onTransactionAdded = (event) => {
    console.log(name, amount)
    event.preventDefault()
  }

  return (
    <BaseTransaction
      onNameChange={setName}
      onAmountChange={setAmount}
      onTransactionAdded={onTransactionAdded}
    />
  )
}

export default Transactions
