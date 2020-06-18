import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { removeTransaction } from "../../redux/actions/transactions"
import { TransactionsList as BaseTransactionsList } from "../../components"

const TransactionsList = () => {
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions.transactions)
  const rate = useSelector((state) => state.exchangeRate.rate)

  const onRemoveTransaction = (id) => {
    dispatch(removeTransaction(id))
  }

  return (
    <BaseTransactionsList
      transactionsList={transactions}
      rate={rate}
      removeTransaction={onRemoveTransaction}
    />
  )
}

export default TransactionsList
