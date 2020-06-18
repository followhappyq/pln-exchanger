import React from "react"

import "./totalamount.scss"

const TotalAmount = ({ total }) => {
  return (
    <div className="total-amount">
      <div className="total-amount__title">Total amount transactions:</div>
      <span className="total-amount__description">{total}</span>
    </div>
  )
}

export default TotalAmount
