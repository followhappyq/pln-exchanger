import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { setQuery } from "../../redux/actions/filters"
import { FilterByTitle as BaseFilterByTitle } from "../../components"

const FilterByTitle = () => {
  const dispatch = useDispatch()

  const query = useSelector((state) => state.filters.query)

  const onQueryChange = (query) => {
    dispatch(setQuery(query))
  }

  return <BaseFilterByTitle query={query} onQueryChange={onQueryChange} />
}

export default FilterByTitle
