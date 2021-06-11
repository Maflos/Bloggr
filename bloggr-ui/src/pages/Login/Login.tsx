import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { changeLogInState, getLoggedUserAsync } from '../../redux/reducers/usersSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch()

  const login = () => {
    dispatch(changeLogInState(true));
    dispatch(getLoggedUserAsync());
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={NavLink}
        to="/home"
        onClick={login}>
        Log In
      </Button>
    </div>

  );
}

export default Login;
