import { useState, useEffect } from 'react'
import './App.css'

type User = {
  id: number,
  title: string,
  body: string,
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(r => r.json())
    .then(r => setUsers(r))
    .catch(e => {
      console.log('Ops! Deu erro...')
    })
  }, []);

  return (
    <div>
    <p id="commit">
    # Interface em React consumindo a API <br/>
    # do <a href='https://jsonplaceholder.typicode.com'
          target='_blank'>https://jsonplaceholder.typicode.com</a>
    </p><br/>
    <h1>Users:</h1><br/>
    {
      users.map(user => {
        return (
          <div id="user-component">
            <p id="id"><strong>Id:</strong> {user.id}</p>
            <p id="title"><strong>Titulo:</strong> {user.title}</p>
            <p id="body"><strong>Body:</strong> {user.body}</p><br/>
          </div>
        )
      })
    }
    </div>
  )
}

export default App
