import React from "react"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"

import "./pagination.scss"

const Pagination = () => {
  return (
    <div className="pagination">
      <LeftCircleOutlined className="pagination__icon" />
      List of transactions
      <RightCircleOutlined className="pagination__icon" />
    </div>
  )
}

export default Pagination
