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

export const noticeForVote = title => {
  return {
    type: 'VOTE',
    data: { title }
  }
}

export const clearFlash = () => {
  return {
    type: 'CLEAR'
  }
}

export const noticeForCreate = title => {
  return {
    type: 'CREATE',
    data: { title }
  }
}

export default reducer
