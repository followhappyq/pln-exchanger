import React, { useState } from "react"
import { connect } from "react-redux"

import { exchangeRateActions } from "../../redux/actions"
import { ExchangeRate as BaseRate } from "../../components"

const ExchangeRate = ({ pln, setExchangeRate }) => {
  const [rate, setRate] = useState(pln)

  const onRateChange = (e) => {
    setRate(e.target.value)
    setExchangeRate(e.target.value)
  }
  return <BaseRate pln={rate} onRateChange={onRateChange} />
}

export default connect(
  ({ exchangeRate }) => ({ pln: exchangeRate.rate }),
  exchangeRateActions
)(ExchangeRate)
