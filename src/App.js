import React, { useEffect } from 'react'
import AnocdoteForm from './components/AnocdoteForm'
import AnocdoteList from './components/AnocdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
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
