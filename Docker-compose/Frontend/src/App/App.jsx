import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/user')
      .then((response) => {
        setUsers(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
     <div className="app">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App