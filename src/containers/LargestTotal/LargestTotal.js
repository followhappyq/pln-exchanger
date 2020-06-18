import React from "react"
import { connect } from "react-redux"

import { LargestTotal as BaseLargestTotal } from "../../components"

const LargestTotal = ({ transactions, rate }) => {
  return <BaseLargestTotal rate={rate} largestTotal={transactions} />
}

export default connect(({ transactions, exchangeRate }) => ({
  rate: exchangeRate.rate,
  transactions: transactions.transactions.filter(
    (item) =>
      +item.euro ===
      Math.max(...transactions.transactions.map((item) => +item.euro))
  ),
}))(LargestTotal)
