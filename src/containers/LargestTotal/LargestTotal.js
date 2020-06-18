import React from "react"
import { useSelector } from "react-redux"

import { LargestTotal as BaseLargestTotal } from "../../components"

const LargestTotal = () => {
  const transactions = useSelector((state) => state.transactions.transactions)
  const rate = useSelector((state) => state.exchangeRate.rate)
  const largestTotal = transactions.filter(
    (item) =>
      Number(item.euro) ===
      Math.max(...transactions.map((item) => Number(item.euro)))
  )

  return <BaseLargestTotal rate={rate} largestTotal={largestTotal} />
}

export default LargestTotal
