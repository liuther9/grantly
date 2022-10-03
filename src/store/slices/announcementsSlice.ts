import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAnnouncement } from 'types/index'

const initialState: IAnnouncement[] = []

export const announcementsSlice = createSlice({
	name: 'announcements',
	initialState,
	reducers: {
		setAnnouncements: (state, { payload }: PayloadAction<any>) => {
			if (!state.find((e) => e.id === payload.id)) {
				return [...state, payload]
			} else return state
		},
		setVote: (state, { payload }: PayloadAction<{ id: string, user: string }>) => {
			return state.map(item => {
				if (item.id === payload.id) {
					return {
						...item,
						votes: [...item.votes, payload.user]
					}
				} else {
					return item
				}
			})
		}
	},
})

export const { setAnnouncements, setVote } = announcementsSlice.actions

export default announcementsSlice.reducer
