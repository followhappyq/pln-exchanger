import React from "react"

import {
  ExchangeRate,
  Transaction,
  TransactionsList,
  TotalAmount,
  LargestTotal,
  ToggleTopTransactions,
  FilterByTitle,
} from "./containers"
import "./style/app.scss"

const App = () => {
  return (
    <div className="container">
      <ExchangeRate />
      <Transaction />
      <TotalAmount />
      <FilterByTitle />

      <div className="wrapper-transaction">
        <div className="transaction__container">
          <div className="transaction__title">List of transactions</div>
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
