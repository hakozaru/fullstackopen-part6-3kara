import React from 'react'
import { useDispatch } from 'react-redux'
import { filtering, clearFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const val = event.target.value

    if(val) {
      dispatch(filtering(val))
    } else {
      dispatch(clearFilter())
    }
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
