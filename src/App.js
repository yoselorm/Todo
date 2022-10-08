import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './Navigation/Navigator';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [user, setUser] = useState([{
    name: 'Meeting at 5',
    id: uuidv4()
  },
  {
    name: 'Lunch at 2',
    id: uuidv4()
  }])

  const addUser = (users) => {
    let newUser = { ...users, id: uuidv4() }
    setUser([...user, newUser])
  }

  const deleteUser = (id) => {
    const newUsers = user.filter((person) => person.id !== id)
    setUser(newUsers)
  }

  const editUser = (id, modPerson) => {
    const newUsers = user.map((users) => users.id === id ? modPerson : users)
    setUser(newUsers)
  }

  return (
    <div className="App">
      <h1 className='text'>Note App</h1>
      <Navigator userData={user} addUser={addUser} delete={deleteUser} edit={editUser} />
    </div>
  );
}

export default App;
