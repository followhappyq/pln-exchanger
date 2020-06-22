import React, { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { removeTransaction } from "../../redux/actions/transactions"
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

  const onChangeQuery = useCallback((transactions, query) => {
    if (query.length === 0) {
      setFilterTransactions(transactions)
    } else {
      setFilterTransactions(onFilterTransactions(transactions, query))
    }
  }, [])

  const onRemoveTransaction = (id) => {
    dispatch(removeTransaction(id))
  }

  useEffect(() => {
    onChangeQuery(transactions, query)
  }, [query, transactions, onChangeQuery])

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
