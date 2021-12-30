import React from 'react';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Registration from './components/Users/Registration';
import Home from './components/Home';

function App() {

  return (
    <>

      <Switch>

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/Registration">
          <Registration />
        </Route>


      </Switch>
    </>
  );
}

export default App;
