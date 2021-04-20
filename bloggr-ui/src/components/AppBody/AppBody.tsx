import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';

const AppBody: React.FC = () => {
  return (
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
  );
};

export default AppBody;
