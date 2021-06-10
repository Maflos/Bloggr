import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Contact from '../../pages/Contact/Contact';
import Account from '../../pages/Account/Account';
import Settings from '../../pages/Settings/Settings';
import { Box, Container } from '@material-ui/core';
import styles from './AppBody.module.scss';

const AppBody: React.FC = () => {

  return (
    <Container maxWidth="xl">
      <Box className={styles.mainBox} mt={9}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Box>
    </Container>
  );
};

export default AppBody;
