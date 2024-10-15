import { createSlice, Dispatch, PayloadAction, ThunkAction   } from "@reduxjs/toolkit";
import { request } from "@/utils/index";
import { RootState } from '@/store'; // 导入 RootState

interface LoginFrom {
  user_name: string,
  password: string
}

const userStore = createSlice({
  name:'user',
  initialState: {
    token: ''
  },
  reducers: {
    setToken(state, action:PayloadAction<string>) {
      state.token = action.payload
    }
  }
})

const {setToken } = userStore.actions

const userReducer = userStore.reducer
// type ThunkResult<R> = ThunkAction<R, RootState, unknown, any>;
const fetchLogin = (loginForm:LoginFrom): ThunkAction<Promise<void>, unknown, unknown, any> => {
  return async (dispatch:Dispatch) => {
   try {
    const res = await request({
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