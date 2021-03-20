import axios from 'axios'

const baseURL = 'http://localhost:3002/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseURL)
  return res.data
}

export default { getAll }