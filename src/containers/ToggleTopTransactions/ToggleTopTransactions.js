import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { setTopTransactions } from "../../redux/actions/transactions"
import { ToggleTopTransactions as BaseToggleTopTransactions } from "../../components"

const ToggleTopTransactions = () => {
  const [top1, setTop1] = useState(true)
  const [top5, setTop5] = useState(false)

  const dispatch = useDispatch()

  const onToggleTop = (top) => {
    dispatch(setTopTransactions(top))
  }

  const toggle = () => {
    if (top1) {
      setTop1(false)
      setTop5(true)
      onToggleTop(5)
    } else {
      setTop5(false)
      setTop1(true)
      onToggleTop(1)
    }
  }

  return <BaseToggleTopTransactions top1={top1} top5={top5} toggle={toggle} />
}

export default ToggleTopTransactions
