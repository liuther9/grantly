import { configureStore } from '@reduxjs/toolkit'
import listenerMiddleware from './listenerMiddleware'
import { userSlice, questionnaireSlice, trackerSlice, trackersSlice, rankSlice, announcementsSlice } from './slices'

export const store = configureStore({
	reducer: {
		questionnaireSlice,
		trackerSlice,
		trackersSlice,
    userSlice,
    rankSlice,
    announcementsSlice
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