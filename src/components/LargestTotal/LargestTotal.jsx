import React from "react"
import shortid from "shortid"

import "./largestTotal.scss"

const LargestTotal = ({ largestTotal, rate }) => {
  return (
    <div className="largest-total">
      {largestTotal.map((item) => (
        <li className="transactions-list__item" key={shortid.generate()}>
          <div className="transactions-list__title">{item.title}</div>
          <div className="transactions-list__total-euro">EURO: {item.euro}</div>
          <div className="transactions-list__total-pln">
            PLN: {Number((item.euro * rate).toFixed(2))}
          </div>
        </li>
      ))}
    </div>
  )
}

export default LargestTotal
