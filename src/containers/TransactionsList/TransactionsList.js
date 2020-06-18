import React from "react"

import { TransactionsList as BaseTransactionsList } from "../../components"

const TransactionsList = () => {
  const transactionsList = [
    {
      title: "Transaction title",
      total: {
        pln: 42.3,
        euro: 10,
      },
    },
    {
      title: "Скинул бабки на карту тра та та",
      total: {
        pln: 42.3,
        euro: 10,
      },
    },
    {
      title: "Transaction title",
      total: {
        pln: 4400000000.3,
        euro: 101,
      },
    },
  ]
  return <BaseTransactionsList transactionsList={transactionsList} />
}

export default TransactionsList
