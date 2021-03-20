const reducer = (state = '', action) => {
  switch(action.type) {
    case 'FILTER':
      return action.data.word
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

export const filtering = word => {
  return {
    type: 'FILTER',
    data: { word }
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR'
  }
}

export default reducer
