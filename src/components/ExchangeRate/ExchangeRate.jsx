import React from "react"

import "./exchangerate.scss"

const ExchangeRate = ({ pln, onRateChange }) => {
  return (
    <div className="exchange-rate">
      <div className="exchange-rate__currency">
        <input
          type="text"
          className="exchange-rate__input"
          defaultValue="1.00"
          readOnly
        />
        <p className="exchange-rate__description">euro</p>
      </div>
      <div className="exchange-rate__currency">
        <input
          type="text"
          className="exchange-rate__input"
          value={pln}
          onChange={onRateChange}
        />
        <p className="exchange-rate__description">pln</p>
      </div>
    </div>
  )
}

export default ExchangeRate
