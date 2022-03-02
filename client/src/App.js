
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import UserHome from './components/UserHome';
import NavBar from './components/NavBar';


import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PetCard from './components/PetCard';

function App() {
  const [user, setUser] = useState('')
  const [pets, setPets] = useState([]);

  //  auth stuff
  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })}, [])

    // fetch to pets#index
    useEffect(() => {
      if (user.id) {
       fetch('/pets')
        .then(res => res.json())
        .then(data => setPets(data))
       }
     }, [user])

  return (
    <div id='app-container'>
      <div id='main-content'>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            {(!user) ? <Landing /> : <UserHome user={user} pets={pets} setPets={setPets}/>} 
          </Route>
          <Route path="/signup">
            {(!user) ? <Signup setUser={setUser}/> : <div>Already signed up?</div>}
          </Route>
          <Route path="/login">
            {(!user) ? <Login setUser={setUser} />: <div>Already Logged In?</div>}
          </Route>
          <Route path="/pets/:petId">
            <PetCard pets={pets}/>
          </Route>
        </Switch>
      </div>
    </div>
  )}

export default App;
