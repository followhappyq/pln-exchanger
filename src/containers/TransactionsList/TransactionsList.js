import React, { useEffect, useState } from "react"
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
  const query = useSelector((state) => state.filters.query)

  const [filterTransactions, setFilterTransactions] = useState(transactions)

  const onFilterTransactions = (transactions, query) =>
    transactions.filter(
      (transaction) =>
        transaction.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
    )

  const onChangeQuery = (transactions, query) => {
    if (query.length === 0) {
      setFilterTransactions(transactions)
    } else {
      setFilterTransactions(onFilterTransactions(transactions, query))
    }
  }

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

  useEffect(() => {
    onChangeQuery(transactions, query)
    // eslint-disable-next-line
  }, [query, transactions])

  return (
    <BaseTransactionsList
      transactionsList={filterTransactions}
      rate={rate}
      removeTransaction={onRemoveTransaction}
      canRemove={true}
    />
  )
}

export default TransactionsList
