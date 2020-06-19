import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  removeTransaction,
  setTopTransactionsList,
  setLargestTransactions,
} from "../../redux/actions/transactions"
import { TransactionsList as BaseTransactionsList } from "../../components"

const TransactionsList = () => {
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions.transactions)
  const rate = useSelector((state) => state.exchangeRate.rate)

  const onRemoveTransaction = (id) => {
    dispatch(removeTransaction(id))
  }

  const onSortTransactionsList = (transactions) => {
    dispatch(setTopTransactionsList(transactions))
  }

  const onAddLargestTransactions = (transactions) => {
    dispatch(setLargestTransactions(transactions))
  }

  const sortTopTransactions = (transactions) => {
    return transactions
      .slice(0)
      .sort(function (a, b) {
        return b.euro - a.euro
      })
      .slice(0, 5)
  }

  const largestTransactions = (transactions) => {
    return transactions.filter(
      (item) =>
        Number(item.euro) ===
        Math.max(...transactions.map((item) => Number(item.euro)))
    )
  }

  useEffect(() => {
    onSortTransactionsList(sortTopTransactions(transactions))
    onAddLargestTransactions(largestTransactions(transactions))
  })

  return (
    <BaseTransactionsList
      transactionsList={transactions}
      rate={rate}
      removeTransaction={onRemoveTransaction}
      canRemove={true}
    />
  )
}

export default TransactionsList
