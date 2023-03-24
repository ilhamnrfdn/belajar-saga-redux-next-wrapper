export const actionsUserList = {
  GET_USER_LIST: "get_data_user_list",
  RES_USER_LIST: "res_user_data",
  GET_USER_ERROR: "USER_ERROR_DATA",
}

// load first time 
export const loadUserData = (params={})=>{
//   console.log(params, "load user params")
  return {
    type: actionsUserList.GET_USER_LIST,
    ...params
  }
}


// result from middleware saga
export const resultUserData = ({...params}) =>{
//   let data= params
//   console.log(params.data)
  return {
    type: actionsUserList.RES_USER_LIST,
    data: params
  }
}

export const failUserFetch = (e)=>{
  console.log(e)
  return {
    type: actionsUserList.GET_USER_ERROR,
    error: e.message
  }
}