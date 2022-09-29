import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setQuestionnaire } from './slices/questionnaireSlice'
import { setUser } from './slices/userSlice'

const listenerMiddleware = createListenerMiddleware()

//ACTIONS ON CLOSE MODAL
listenerMiddleware.startListening({
  actionCreator: setQuestionnaire,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
  },
})

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    action.payload !== null ? localStorage.setItem('user', JSON.stringify(action.payload)) : localStorage.removeItem('user')
  }
})

export default listenerMiddleware