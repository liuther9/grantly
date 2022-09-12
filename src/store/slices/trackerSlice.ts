import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestionnare } from 'types/index'

const initialState = {
	show: false
}

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    showTracker: (
      state,
      { payload }
		) => {state.show = payload},
	},
})

export const { showTracker } = trackerSlice.actions

export default trackerSlice.reducer