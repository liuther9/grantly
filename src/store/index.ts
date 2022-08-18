import { configureStore } from '@reduxjs/toolkit'
import listenerMiddleware from './listenerMiddleware'
import questionnaireSlice from './slices/questionnaireSlice'

export const store = configureStore({
	reducer: {
		questionnaireSlice,
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