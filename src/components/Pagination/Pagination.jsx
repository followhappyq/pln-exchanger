import React from "react"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"

import "./pagination.scss"

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__controller">List of transactions</div>
      <ul className="pagination__pages">
        <LeftCircleOutlined className="pagination__icon" />
        <li className="pagination__pages__page">1</li>
        <li className="pagination__pages__page">2</li>
        <li className="pagination__pages__page">3</li>
        <RightCircleOutlined className="pagination__icon" />
      </ul>
    </div>
  )
}

export default Pagination
