import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { noticeForVote, clearFlash } from '../reducers/notificationReducer'

const AnocdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.sort((anocA, anocB) => {
      if(anocA.votes > anocB.votes) return -1
      if(anocA.votes < anocB.votes) return 1
      return 0
    })
  })

  const dispatch = useDispatch()
  const vote = (id, content) => {
    dispatch(incrementVote(id))
    dispatch(noticeForVote(content))
    setTimeout(() => dispatch(clearFlash()), 5000)
  }

  return(
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnocdoteList
