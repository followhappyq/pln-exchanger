import React from "react"

import {
  ExchangeRate,
  Transaction,
  TransactionsList,
  TotalAmount,
  LargestTotal,
  Pagination,
  ToggleTopTransactions,
} from "./containers"
import "./style/app.scss"

const App = () => {
  return (
    <div className="container">
      <ExchangeRate />
      <Transaction />
      <TotalAmount />
      <div className="wrapper-transaction">
        <div className="transaction__container">
          <div className="transaction__title">
            <Pagination />
          </div>
          <TransactionsList />
        </div>
        <div className="transaction__container">
          <div className="transaction__title">
            <ToggleTopTransactions />
          </div>
          <LargestTotal />
        </div>
      </div>
    </div>
  )
}

export default App
