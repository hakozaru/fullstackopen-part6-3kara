import React from 'react'
import { connect } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { noticeForCreate } from '../reducers/notificationReducer'

const AnocdoteForm = (props) => {
  const addAnec = async e => {
    e.preventDefault()
    const anec = e.target.anec.value
    props.createAnec(anec)
    props.noticeForCreate(anec)
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

const mapDispatchToProps = dispatch => {
  return {
    createAnec: anec => dispatch(createAnec(anec)),
    noticeForCreate: anec => dispatch(noticeForCreate(anec, 5))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnocdoteForm)
