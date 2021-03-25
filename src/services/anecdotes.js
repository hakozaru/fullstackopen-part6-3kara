import axios from 'axios'

const baseURL = 'http://localhost:3002/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const res = await axios.get(baseURL)
  return res.data
}

const createNew = async content => {
  const newAnec = {
    content,
    votes: 0,
    id: getId(),
  }
  const res = await axios.post(baseURL, newAnec)
  return res.data
}

const incrementVote = async anecdote => {
  const voteVal = anecdote.votes + 1
  const res = await axios.put(`${baseURL}/${anecdote.id}`, {
    ...anecdote,
    votes: voteVal
  })
  return res.data
}

export default { getAll, createNew, incrementVote }
