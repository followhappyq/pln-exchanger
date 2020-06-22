import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { TransactionsList as BaseLargestTotal } from "../../components"

const LargestTotal = () => {
  const transactions = useSelector((state) => state.transactions.transactions)
  const top = useSelector((state) => state.transactions.top)
  const rate = useSelector((state) => state.exchangeRate.rate)

  const [topFiveTransactions, setTopFiveTransactions] = useState([])
  const [topOneTransactions, setTopOneTransactions] = useState([])

  const sortTopTransactions = (transactions) => {
    return transactions
      .slice(0)
      .sort(function (a, b) {
        return b.euro - a.euro
      })
      .slice(0, 5)
  }

  const largestTransactionss = (transactions) => {
    return transactions.filter(
      (item) =>
        Number(item.euro) ===
        Math.max(...transactions.map((item) => Number(item.euro)))
    )
  }

  useEffect(() => {
    setTopFiveTransactions(sortTopTransactions(transactions))
    setTopOneTransactions(largestTransactionss(transactions))
  }, [transactions])

  const topTransactions = () => {
    if (top === 1) {
      return topOneTransactions
    } else {
      return topFiveTransactions
    }
  }

  return <BaseLargestTotal rate={rate} transactionsList={topTransactions()} />
}

export default LargestTotal
