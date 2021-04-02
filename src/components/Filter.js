import React from 'react'
import { connect } from 'react-redux'
import { filtering, clearFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    const val = event.target.value

    if(val) {
      props.filtering(val)
    } else {
      props.clearFilter()
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

const mapDispatchToProps = dispatch => {
  return {
    filterring: val => dispatch(filtering(val)),
    clearFilter: () => dispatch(clearFilter()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
