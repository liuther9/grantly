import { configureStore } from '@reduxjs/toolkit'
import listenerMiddleware from './listenerMiddleware'
import questionnaireSlice from './slices/questionnaireSlice'
import trackerSlice from './slices/trackerSlice'

export const store = configureStore({
	reducer: {
		questionnaireSlice,
		trackerSlice,
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