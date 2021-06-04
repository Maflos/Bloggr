import React from 'react';
import styles from './UserHeaderOptions.module.scss';
import IconButton from '@material-ui/core/IconButton';
import { Badge, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import MailIcon from '@material-ui/icons/Mail';
import UserHeaderOptionsProps from './UserHeaderOptions.props';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { setLogInState } from '../../redux/reducers/headerSlice';

const UserHeaderOptions: React.FC<UserHeaderOptionsProps> = ({
  transMenuId,
  menuId,
  handleTranslationMenuOpen,
  handleProfileMenuOpen,
}: UserHeaderOptionsProps) => {

  const loggedIn = useAppSelector(setLogInState);

  const openTranslationMenu = (event: React.MouseEvent<HTMLElement>) => {
    handleTranslationMenuOpen(event);
  }

  const openProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    handleProfileMenuOpen(event);
  }

  return (
    <React.Fragment>
      {
        !loggedIn ? (
          <div className={styles.rightMenu}>
            <div className={styles.loginButton}>
              <Button variant="contained" color="primary" component={NavLink} to="/login">Log In</Button>
            </div>

            <div>
              <Button variant="contained" component={NavLink} to="/register">Register</Button>
            </div>
          </div>
        ) : (
          <div className={styles.rightMenu}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="language selector"
              aria-controls={transMenuId}
              aria-haspopup="true"
              onClick={openTranslationMenu}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={openProfileMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        )
      }
    </React.Fragment>
  );
};

export default UserHeaderOptions;
