import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import Registration from './components/Users/Registration';

import Home from './components/Home';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
import TutorialsList from './components/TutorialsList';

function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            My Application
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Tutorial
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">

          <Switch>

            <Route exact path={ ["/", "/tutorials"] } component={ TutorialsList } />
            <Route exact path="/add" component={ AddTutorial } />
            <Route path="/tutorials/:id" component={ Tutorial } />

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route exact path="/Registration">
              <Registration />
            </Route>


          </Switch>
        </div>
      </div>

    </>
  );
}

export default App;
