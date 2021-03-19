import { createStore, combineReducers } from 'redux'
import AnecdoteReducer from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: NotificationReducer,
})

export const store = createStore(
  rootReducer, composeWithDevTools()
)
