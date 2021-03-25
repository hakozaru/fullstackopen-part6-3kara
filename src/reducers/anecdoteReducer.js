
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

export const incrementVote = id => {
  return {
    type: 'INCREMENT_VOTE',
    data: { id }
  }
}

export const createAnec = data => {
  return {
    type: 'CREATE_ANEC',
    data
  }
}

export const initAnecdotes = anecdotes => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer
