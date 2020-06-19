import React from "react"
import "./toggleTopTransactions.scss"

const ToggleTopTransactions = ({ top1, top5, toggle }) => {
  return (
    <div className="toggle-transactions">
      <button
        className="toggle-transactions__item"
        disabled={top1}
        onClick={toggle}
      >
        Top 1
      </button>
      <button
        className="toggle-transactions__item"
        disabled={top5}
        onClick={toggle}
      >
        Top 5
      </button>
    </div>
  )
}

export default ToggleTopTransactions
