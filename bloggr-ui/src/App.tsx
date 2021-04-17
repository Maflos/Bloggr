import React from 'react';
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <MainMenu />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
