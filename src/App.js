import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote, createAnec } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => {
    return state.sort((anocA, anocB) => {
      if(anocA.votes > anocB.votes) return -1
      if(anocA.votes < anocB.votes) return 1
      return 0
    })
  })
  const dispatch = useDispatch()

  const vote = (id) => dispatch(incrementVote(id))

  const addAnec = (e) => {
    e.preventDefault()
    const anec = e.target.anec.value
    dispatch(createAnec(anec))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name='anec' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
