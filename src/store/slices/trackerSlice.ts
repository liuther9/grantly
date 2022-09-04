import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestionnare } from 'types/index'

const initialState = {
	show: false
}

export const trakcerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    showTracker: (
      state,
      { payload }
		) => {state.show = payload},
	},
})

export const { showTracker } = trakcerSlice.actions

export default trakcerSlice.reducer