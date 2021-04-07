const reducer = (state = '', action) => {
  switch(action.type) {
    case 'VOTE':
      return `you voted '${action.data.title}'`
    case 'CREATE':
      return `you created '${action.data.title}'`
    case 'ERROR':
      return 'error'
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

let timeoutID = null

export const noticeForVote = (title, sec) => {
  return async dispatch => {
    dispatch({
      type: 'VOTE',
      data: { title }
    })
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, sec * 1000)
  }
}

export const clearFlash = () => {
  return {
    type: 'CLEAR'
  }
}

export const noticeForCreate = (title, sec) => {
  return async dispatch => {
    dispatch({
      type: 'CREATE',
      data: { title }
    })
    await new Promise(resolve => setTimeout(resolve, sec * 1000))
    dispatch({ type: 'CLEAR' })
  }
}

export default reducer
