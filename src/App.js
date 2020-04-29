import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/registration/Login';
import SignUp from './components/registration/SignUp';
import Dashboard from './components/dashboard/Dashboard';

function App() {

  return (
    <Router>
    <div className="App">
      <h1>Robots vs Zombies</h1>
      <Switch>
      <Route exact path='/' component={SignUp}/>
      <Route path ='/register' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
