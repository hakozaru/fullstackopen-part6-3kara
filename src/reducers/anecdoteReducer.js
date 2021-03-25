import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INCREMENT_VOTE':
      const id = action.data.id
      const target = state.find(a => a.id === id)
      const changedTarget = {
        ...target, votes: target.votes + 1
      }
      return state.map(a => a.id === id ? changedTarget : a)
    case 'CREATE_ANEC':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const incrementVote = anecdote => {
  return async dispatch => {
    await anecdoteService.incrementVote(anecdote)
    dispatch({
      type: 'INCREMENT_VOTE',
      data: { id: anecdote.id }
    })
  }
}

export const createAnec = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE_ANEC',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
export default reducer
