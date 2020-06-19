import React from "react"
import { useSelector } from "react-redux"

import { TransactionsList as BaseLargestTotal } from "../../components"

const LargestTotal = () => {
  const topTransactionsList = useSelector(
    (state) => state.transactions.topTransactions
  )
  const largestTransactions = useSelector(
    (state) => state.transactions.largestTrasactions
  )
  const top = useSelector((state) => state.transactions.top)
  const rate = useSelector((state) => state.exchangeRate.rate)

  const topTransactions = () => {
    if (top === 1) {
      return largestTransactions
    } else {
      return topTransactionsList
    }
  }

  return <BaseLargestTotal rate={rate} transactionsList={topTransactions()} />
}

export default LargestTotal
