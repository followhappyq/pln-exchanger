import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setExchangeRate } from "../../redux/actions/exchangeRate"
import { ExchangeRate as BaseRate } from "../../components"

const ExchangeRate = () => {
  const pln = useSelector((state) => state.exchangeRate.rate)
  const [rate, setRate] = useState(pln)
  const [error, setError] = useState("")

  const dispatch = useDispatch()

  const onSetExchangeRate = (value) => {
    dispatch(setExchangeRate(value))
  }

  const onRateChange = ({ target }) => {
    const { value } = target
    if (value >= 0) {
      setRate(value)
      setError("")
      if (value !== "0") {
        onSetExchangeRate(value)
      }
    } else {
      setError("Can't be negative.")
    }
  }
  return <BaseRate pln={rate} onRateChange={onRateChange} error={error} />
}

export default ExchangeRate
