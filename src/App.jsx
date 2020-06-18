import React from "react"

import {
  ExchangeRate,
  Transaction,
  TransactionsList,
  TotalAmount,
  LargestTotal,
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
          <div className="transaction__title">List of transactions</div>
          <TransactionsList />
        </div>
        <div className="transaction__container">
          <div className="transaction__title">
            List of transaction with largest amount total
          </div>
          <LargestTotal />
        </div>
      </div>
    </div>
  )
}

export default App
