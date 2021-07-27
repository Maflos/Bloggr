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
import Profile from '../../pages/Profile/Profile';
import Settings from '../../pages/Settings/Settings';
import PostDetails from '../../pages/PostDetails/PostDetails';
import { Box, Container } from '@material-ui/core';
import styles from './AppBody.module.scss';
import { ProfileRoutes } from '../../constants/Routes';

const AppBody: React.FC = () => {

  return (
    <Container maxWidth="xl">
      <Box className={styles.mainBox} mt={9}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/profiles" component={Profile} />
          <Route exact path={ProfileRoutes.post.path} component={PostDetails} />
          <Route exact path="/settings" component={Settings} />
          <Redirect to="/" />
        </Switch>
      </Box>
    </Container>
  );
};

export default AppBody;
