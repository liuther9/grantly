import { configureStore } from '@reduxjs/toolkit'
import listenerMiddleware from './listenerMiddleware'
import { userSlice, questionnaireSlice, trackerSlice, trackersSlice, rankSlice } from './slices'

export const store = configureStore({
	reducer: {
		questionnaireSlice,
		trackerSlice,
		trackersSlice,
    userSlice,
    rankSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(
      )
      .prepend(
        listenerMiddleware.middleware
      )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch