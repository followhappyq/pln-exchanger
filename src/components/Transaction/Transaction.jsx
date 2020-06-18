import React from "react"

import "./transaction.scss"

const Transactions = ({ onNameChange, onAmountChange, onTransactionAdded }) => {
  return (
    <form className="transaction" onSubmit={onTransactionAdded}>
      <input
        type="text"
        className="transaction__name"
        placeholder="Transaction name"
        onChange={(e) => {
          onNameChange(e.target.value)
        }}
      />
      <input
        type="number"
        className="transaction__amount"
        placeholder="0.00"
        onChange={(e) => {
          onAmountChange(e.target.value)
        }}
      />
      <input type="submit" className="transaction__add" value="Add" />
    </form>
  )
}

export default Transactions
