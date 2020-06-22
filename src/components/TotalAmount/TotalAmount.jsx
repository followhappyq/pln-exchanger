import React from "react"

import "./totalamount.scss"

const TotalAmount = ({ totalAmount, rate }) => {
  return (
    <div className="total-amount">
      <div className="total-amount__currency">
        <span className="total-amount__title">Total amount transactions:</span>
        <span className="total-amount__description">
          {totalAmount.toFixed(2)} (EURO) /{" "}
          {Number(totalAmount * rate).toFixed(2)} (PLN)
        </span>
      </div>
    </div>
  )
}

export default TotalAmount
