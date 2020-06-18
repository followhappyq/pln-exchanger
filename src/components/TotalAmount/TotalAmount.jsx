import React from "react"

import "./totalamount.scss"

const TotalAmount = ({ totalAmount, rate }) => {
  return (
    <div className="total-amount">
      <div className="total-amount__currency">
        <div className="total-amount__title">Total amount transactions:</div>
        <span className="total-amount__description">
          {totalAmount} (EURO) / {Number((totalAmount * rate).toFixed(2))} (PLN)
        </span>
      </div>
    </div>
  )
}

export default TotalAmount
