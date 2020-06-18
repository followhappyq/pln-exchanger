import React from "react"
import shortid from "shortid"

import "./transactionslist.scss"

const TransactionsList = ({ transactionsList }) => {
  return (
    <ul className="transactions-list">
      {transactionsList.map((item) => (
        <li className="transactions-list__item" key={shortid.generate()}>
          <div className="transactions-list__title">{item.title}</div>
          <div className="transactions-list__total-euro">
            EURO: {item.total.euro}
          </div>
          <div className="transactions-list__total-pln">
            PLN: {item.total.pln}
          </div>
          <button className="transactions-list__remove">X</button>
        </li>
      ))}
    </ul>
  )
}

export default TransactionsList
