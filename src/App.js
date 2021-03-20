import React, { useEffect } from 'react'
import AnocdoteForm from './components/AnocdoteForm'
import AnocdoteList from './components/AnocdoteList'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { initAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => {
      dispatch(initAnecdotes(anecdotes))
    })
  }, [dispatch])

  return (
    <div>
      <Notification />
      <AnocdoteList />
      <AnocdoteForm />
    </div>
  )
}

export default App
