import React from "react"
import { useSelector } from "react-redux"

import { TotalAmount as BaseTotalAmount } from "../../components"

const TotalAmount = () => {
  const rate = useSelector((state) => state.exchangeRate.rate)
  const transactions = useSelector((state) => state.transactions.transactions)

  const total = (totalAmount) => {
    return totalAmount.length > 0
      ? totalAmount.reduce((sum, current) => sum + +current, 0)
      : 0
  }

  const totalAmount = total(transactions.map((item) => item.euro))

  return <BaseTotalAmount totalAmount={totalAmount} rate={rate} />
}

export default TotalAmount
