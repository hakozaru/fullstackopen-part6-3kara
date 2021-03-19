import React from 'react'
import AnocdoteForm from './components/AnocdoteForm'
import AnocdoteList from './components/AnocdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <AnocdoteList />
      <AnocdoteForm />
    </div>
  )
}

export default App
