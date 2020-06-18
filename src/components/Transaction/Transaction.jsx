import React from "react"

import "./transaction.scss"

const Transactions = ({
  onNameChange,
  onAmountChange,
  onTransactionAdded,
  name,
  amount,
  error,
}) => {
  return (
    <form className="transaction" onSubmit={onTransactionAdded}>
      <div className="error-message">{error}</div>
      <div className="form-group">
        <input
          type="text"
          className="transaction__name"
          placeholder="Transaction name"
          onChange={(e) => {
            onNameChange(e.target.value)
          }}
          value={name}
          name="title"
          required
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
          required
        />
        <input type="submit" className="transaction__add" value="Add" />
      </div>
    </form>
  )
}

export default Transactions
