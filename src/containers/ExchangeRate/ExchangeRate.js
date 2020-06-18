import React, { useState } from "react"
import { connect } from "react-redux"

import { exchangeRateActions } from "../../redux/actions"
import { ExchangeRate as BaseRate } from "../../components"

const ExchangeRate = ({ pln, setExchangeRate }) => {
  const [rate, setRate] = useState(pln)
  const [error, setError] = useState("")

  const onRateChange = (e) => {
    if (e.target.value > -1) {
      setRate(e.target.value)
      setError("")
      if (+e.target.value !== 0) {
        setExchangeRate(e.target.value)
      }
    } else {
      setError("Can't be negative.")
    }
  }
  return <BaseRate pln={rate} onRateChange={onRateChange} error={error} />
}

export default connect(
  ({ exchangeRate }) => ({ pln: exchangeRate.rate }),
  exchangeRateActions
)(ExchangeRate)
