import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeLogInState, setLogInState } from '../../redux/reducers/headerSlice';

const Login: React.FC = () => {
  const loggedIn = useAppSelector(setLogInState);
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={NavLink}
        to="/home"
        onClick={() => { dispatch(changeLogInState(true)); }}>
        Log In
      </Button>
    </div>

  );
}

export default Login;
