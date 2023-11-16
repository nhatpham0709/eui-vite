// ** Redux
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      name: '',
      email: ''
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export default userSlice.reducer
