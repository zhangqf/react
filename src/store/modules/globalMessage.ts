import { createSlice } from "@reduxjs/toolkit";

const messageState = createSlice({
  name: 'message',
  initialState: {
    open: false,
    text: ''
  },
  reducers: {
    setOpen(state, actions) {
      state.open = actions.payload
    },
    setText(state, actions) {
      state.text = actions.payload
    }
  }
})

const {setOpen, setText} = messageState.actions

const messageReducer = messageState.reducer



export {setOpen, setText}

export default messageReducer