import React from "react"
import { connect } from "react-redux"

import { TotalAmount as BaseTotalAmount } from "../../components"

const TotalAmount = ({ totalAmount, rate }) => {
  return <BaseTotalAmount totalAmount={totalAmount} rate={rate} />
}

const total = (totalAmount) => {
  return totalAmount.length > 0
    ? totalAmount.reduce((sum, current) => sum + +current, 0)
    : 0
}

export default connect(({ transactions, exchangeRate }) => ({
  totalAmount: total(transactions.transactions.map((item) => item.euro)),
  rate: exchangeRate.rate,
}))(TotalAmount)
