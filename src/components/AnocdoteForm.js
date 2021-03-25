import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { noticeForCreate, clearFlash } from '../reducers/notificationReducer'

const AnocdoteForm = () => {
  const dispatch = useDispatch()

  const addAnec = async e => {
    e.preventDefault()
    const anec = e.target.anec.value
    dispatch(createAnec(anec))
    dispatch(noticeForCreate(anec, 5))
  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name='anec' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnocdoteForm
