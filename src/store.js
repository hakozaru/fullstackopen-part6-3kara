import { createStore, combineReducers } from 'redux'
import AnecdoteReducer from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import FilterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: NotificationReducer,
  filter: FilterReducer,
})

export const store = createStore(
  rootReducer, composeWithDevTools()
)
