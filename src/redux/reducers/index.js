import { combineReducers } from "redux"

const reducers = ["exchangeRate", "transactions", "filters"]

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)
