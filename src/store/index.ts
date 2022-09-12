import { configureStore } from '@reduxjs/toolkit'
import listenerMiddleware from './listenerMiddleware'
import { userSlice, questionnaireSlice, trackerSlice } from './slices'

export const store = configureStore({
	reducer: {
		questionnaireSlice,
		trackerSlice,
		userSlice,
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