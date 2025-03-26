import React, { useState } from "react"; // Import useState
import './App.css';
import Header from './Header';
import Add from './Add';
import UserList from './Contact';

function App() {
  const [users, setUsers] = useState([]); 

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <Add addUser={addUser} users={users} /> 
      <UserList users={users} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;