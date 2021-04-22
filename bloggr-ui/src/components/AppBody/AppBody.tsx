import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import { Box, Container } from '@material-ui/core';
import { useStyles } from './AppBody.styles';

const AppBody: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Box className={classes.mainBox} mt={12}>
        <Switch>
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
