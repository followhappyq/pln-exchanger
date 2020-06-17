import React from "react"

import { ExchangeRate, Transactions } from "./containers"
import "./style/app.scss"

const App = () => {
  return (
    <div className="container">
      <ExchangeRate />
      <Transactions />
    </div>
  )
}

export default App
