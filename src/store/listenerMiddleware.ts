import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setQuestionnaire } from './slices/questionnaireSlice'

const listenerMiddleware = createListenerMiddleware()

//ACTIONS ON CLOSE MODAL
listenerMiddleware.startListening({
  actionCreator: setQuestionnaire,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
  },
})

export default listenerMiddleware