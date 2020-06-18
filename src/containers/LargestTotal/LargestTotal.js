import React from "react"
import { connect } from "react-redux"

import { LargestTotal as BaseLargestTotal } from "../../components"

const LargestTotal = ({ transactions, rate }) => {
  return (
    <BaseLargestTotal
      rate={rate}
      largestTotal={transactions.filter(
        (item) =>
          +item.euro === Math.max(...transactions.map((item) => +item.euro))
      )}
    />
  )
}

export default connect(({ transactions, exchangeRate }) => ({
  transactions: transactions.transactions,
  rate: exchangeRate.rate,
}))(LargestTotal)
