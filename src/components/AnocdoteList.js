import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { noticeForVote, clearFlash } from '../reducers/notificationReducer'
import Filter from '../components/Filter'

const AnocdoteList = () => {
  const anecdotes = useSelector(state => {
    const filteredAnecdotes = state.anecdotes.filter(anec => {
      return anec.content.match(state.filter)
    })

    return filteredAnecdotes.sort((anocA, anocB) => {
      if(anocA.votes > anocB.votes) return -1
      if(anocA.votes < anocB.votes) return 1
      return 0
    })
  })

  const dispatch = useDispatch()
  const vote = (anecdote) => {
    dispatch(incrementVote(anecdote))
    dispatch(noticeForVote(anecdote.content, 5))
  }

  return(
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnocdoteList
