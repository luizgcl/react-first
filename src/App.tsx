import { useFetch } from './hooks/useFetch';

type User = {
  id: number,
  name: string,
  email: string,
}

function App() {
  const { data: users, isFetching, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users/');

  if (error !== null) {
    return <h1>BAD REQUEST!</h1>
  }

  return (<div> 
    { isFetching && <p>Carregando...</p> }
    <h1>Lista de usuários:</h1>{
    users?.map(user => {
      return (
      <div id="user-component">
      <label>Id: {user.id}</label> |
      <label> Name: {user.name}</label> |
      <label> Email: {user.email}</label>
      <hr/>
      </div>)
    })
  }</div>)
}

export default App
