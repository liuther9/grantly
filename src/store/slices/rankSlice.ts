import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'types/index'

const initialState: IUser[] = []

export const rankSlice = createSlice({
	name: 'rank',
	initialState,
	reducers: {
		setRanking: (state, { payload }) => {
			if (!state.find((user: IUser) => user.id === payload['id'])) {
				return [...state, payload].sort((a:IUser, b:IUser) => b.score - a.score)
			}
		},
	},
})

export const { setRanking } = rankSlice.actions

export default rankSlice.reducer
