import { createStore, combineReducers } from 'redux'
import AnecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  anecdotes: AnecdoteReducer
})

export const store = createStore(
  rootReducer, composeWithDevTools()
)
