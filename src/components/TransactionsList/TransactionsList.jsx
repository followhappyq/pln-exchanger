import React from "react"
import shortid from "shortid"

import "./transactionslist.scss"

const TransactionsList = ({
  transactionsList,
  rate,
  removeTransaction,
  canRemove,
}) => {
  return (
    <ul className="transactions-list">
      {transactionsList.map((item) => (
        <li className="transactions-list__item" key={shortid.generate()}>
          <div className="transactions-list__title">{item.title}</div>
          <div className="transactions-list__total-euro">
            EURO: {item.euro.toFixed(2)}
          </div>
          <div className="transactions-list__total-pln">
            PLN: {Number(item.euro * rate).toFixed(2)}
          </div>
          {canRemove ? (
            <button
              className="transactions-list__remove"
              onClick={() => {
                removeTransaction(item._id)
              }}
            >
              X
            </button>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  )
}

export default TransactionsList
