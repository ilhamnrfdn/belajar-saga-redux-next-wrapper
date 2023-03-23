import { combineReducers } from "redux"

import userReducers from "./list/store"

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userReducers
})

export default rootReducer