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
import { Box, Container } from '@material-ui/core';
import styles from './AppBody.module.scss';

const AppBody: React.FC = () => {

  return (
    <Container maxWidth="xl">
      <Box className={styles.mainBox} mt={12}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Box>
    </Container>
  );
};

export default AppBody;
