import { useState } from 'react';
import logo from './logo.svg';
//import './App.css';
import Navigator from './Navigation/Navigator';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [user, setUser] = useState([{
    name: 'Selorm',
    occupation: 'Engineer',
    age: 21,
    id: uuidv4()
  },
  {
    name: 'Dwayne',
    occupation: 'Developer',
    age: 22,
    id: uuidv4()
  }])

  const addUser = (users) => {
    let newUser = { ...users, id: uuidv4() }
    setUser([...user, newUser])
  }
  return (
    <div className="App">
      <Navigator userData={user} addUser={addUser} />
    </div>
  );
}

export default App;
