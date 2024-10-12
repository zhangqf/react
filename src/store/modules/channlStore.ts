import { createSlice } from '@reduxjs/toolkit'

const countState = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    inscrement(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

const { inscrement, decrement} = countState.actions

const reducer = countState.reducer

export {
  inscrement,
  decrement
}

export default reducer