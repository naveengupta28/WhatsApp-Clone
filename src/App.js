import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {

  const[{user}, dispatch]=useStateValue()
  return (

    //BEM naming convention
    <div className="App">
      {!user ? (
        <h1><Login/></h1>
      ):(
      <div className="app__body">
     
        <Router>
        <Sidebar/>
        <Switch>
        <Route exact path="/rooms/:roomId" component={Chat}/>
        <Route exact path="/" component={Chat}/>
        </Switch>
        

        </Router>

      </div>
      )}
    </div>
  );
}

export default App;
