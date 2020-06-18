import React from "react"

import "./transaction.scss"

const Transactions = ({
  onNameChange,
  onAmountChange,
  onTransactionAdded,
  name,
  amount,
}) => {
  return (
    <form className="transaction" onSubmit={onTransactionAdded}>
      <input
        type="text"
        className="transaction__name"
        placeholder="Transaction name"
        onChange={(e) => {
          onNameChange(e.target.value)
        }}
        value={name}
      />
      <input
        type="number"
        className="transaction__amount"
        placeholder="0.00 Euro"
        step="0.01"
        onChange={(e) => {
          onAmountChange(e.target.value)
        }}
        value={amount}
      />
      <input type="submit" className="transaction__add" value="Add" />
    </form>
  )
}

export default Transactions
