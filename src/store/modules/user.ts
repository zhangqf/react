import { createSlice, Dispatch, PayloadAction, ThunkAction, Action   } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from "@/utils/index";
import { request } from "@/utils/index"

interface LoginFrom {
  user_name: string,
  password: string
}

const userStore = createSlice({
  name:'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken(state, action:PayloadAction<string>) {
      _setToken(action.payload),
      state.token = action.payload
    }
  }
})

const {setToken } = userStore.actions

const userReducer = userStore.reducer

type UserType = {
  result: {
    access_token: string
  }
}
const fetchLogin = (loginForm:LoginFrom): ThunkAction<Promise<void>, {}, null, Action<string>> => {
  return async (dispatch:Dispatch<any>) => {
   try {
    const res:UserType = await request({
      url: '/users/login',
      method: "post",
      data: loginForm
    })
    console.log(res)
    dispatch(setToken(res.result.access_token))
   } catch (error) {
    console.log("login is fail" ,error)
   }
  }
}

export { fetchLogin, setToken }

export default userReducer