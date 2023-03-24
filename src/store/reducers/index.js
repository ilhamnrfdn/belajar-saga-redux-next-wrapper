import { combineReducers } from "redux"

import userReducers from "../list/users"

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  userReducers
})

export default rootReducer