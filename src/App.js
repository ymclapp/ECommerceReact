import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

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
              <Nav.Link as={Link} to="/tutorials" className="nav-link">
                Tutorials
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Tutorial
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/registration"} className="nav-link">
                Register
              </Link>
            </li>

          </div>
        </nav>

        <div className="container mt-3">

          <Switch>

            <Route exact path="/tutorials">
              <TutorialsList />
            </Route>


            <Route exact path="/add">
              <AddTutorial />
            </Route>

            <Route path="/tutorials/:id">
              <Tutorial />
            </Route>

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
