import { SET_QUERY } from "../actions/filters"

const initialState = {
  query: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_QUERY:
      return {
        ...state,
        query: payload,
      }

    default:
      return state
  }
}
