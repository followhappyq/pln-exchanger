import React from "react"
import "./filterByTitle.scss"

const FilterByTitle = ({ query, onQueryChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={({ target }) => {
        onQueryChange(target.value)
      }}
      placeholder="Filter transactions by title"
      className="filter-by-title"
    />
  )
}

export default FilterByTitle
