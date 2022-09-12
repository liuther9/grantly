import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'types/index'

const initialState:IUser = {
	id: '',
	email: '',
	token: '',
	name: '',
	profilePic: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      { payload }
		) => (state = payload),
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer