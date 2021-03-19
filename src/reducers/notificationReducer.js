const reducer = (state = 'initial state', action) => {
  switch(action.type) {
    case 'NOTICE':
      return 'notice'
    case 'ERROR':
      return 'error'
    default:
      return state
  }
}

export default reducer
