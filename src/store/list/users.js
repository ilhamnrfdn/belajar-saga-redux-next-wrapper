import { HYDRATE } from "next-redux-wrapper"
import { actionsUserList } from "../rootsaga/action";

const initialState = {
  status: "All",
  users: {},
  message:""
}
  
export default function userReducers(state = initialState, action) {
  switch (action.type) {
  case HYDRATE: {
    return {
      // Again, one less level of nesting to copy
      ...state,
      ...action.payload.userReducers
    }
  }
  case actionsUserList.RES_USER_LIST:{
    console.log("store =>" , action.data)
    return {
      ...state,
      users:action.data
    }
  }
  default:
    return {...state}
  }
}