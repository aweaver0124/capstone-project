
import Landing from './components/Landing';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })}, [])

  return (
    <Switch>
      <Route exact path="/">
        {(!user) ? <Landing /> : <div>nothing to return yet...</div>} 
      </Route>
    </Switch>
  )}

export default App;
