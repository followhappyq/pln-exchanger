import React from "react"
import { LargestTotal } from "./components"
import {
  ExchangeRate,
  Transaction,
  TransactionsList,
  TotalAmount,
} from "./containers"
import "./style/app.scss"

const App = () => {
  return (
    <div className="container">
      <ExchangeRate />
      <Transaction />
      <div className="wrapper-transaction">
        <TransactionsList />
        <LargestTotal />
      </div>
      <TotalAmount />
    </div>
  )
}

export default App
