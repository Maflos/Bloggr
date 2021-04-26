import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import { Box, ListItem, ListItemText } from '@material-ui/core';
import { Routes } from '../../constants/Routes';
import { translate, setLanguage } from '../../mocks/LanguageAPIMock';
import { AccountCircle } from '@material-ui/icons';
import styles from './AppHeader.module.scss';
import AccountMenu from '../AccountMenu/AccountMenu';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import LANGUAGES from '../../constants/Translations';

const AppHeader: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerState, setDrawerState] = React.useState<boolean>(false);
  const [transMenuAnchorEl, setTransMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const menuId = 'primary-account-menu';
  const transMenuId = 'primary-translation-menu';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLoggedIn(true);
  };

  const handleTranslationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setTransMenuAnchorEl(event.currentTarget);
  };

  const handleTranslationMenuClose = () => {
    setTransMenuAnchorEl(null);
  }

  const handleSelectLanguage = (selectedLanguage: LANGUAGES) => {
    setLanguage(selectedLanguage);
    setTransMenuAnchorEl(null);
  }

  const changeDrawerState = (open: boolean) => {
    setDrawerState(open);
  }

  return (
    <div className={styles.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => { setDrawerState(true); }}>
            <MenuIcon />
          </IconButton>
          <Typography className={styles.title} variant="h6" noWrap>
            {translate('appName')}
          </Typography>
          <Box className={styles.mainMenu}>
            <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
              {Routes.map(({ title, path }) => (
                <ListItem button key={title} component={NavLink} to={path} activeClassName={'Mui-selected'}>
                  <ListItemText>{translate(title)}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          <div className={styles.grow} />
          {
            loggedIn ? (
              <div className={styles.rightMenu}>
                <Button variant="contained" color="primary" component={NavLink} to="/login">Log In</Button>
                <Button variant="outlined" component={NavLink} to="/register">Register</Button>
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
                  onClick={handleTranslationMenuOpen}
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
      <AccountMenu menuId={menuId} handleMenuClose={handleMenuClose} anchorEl={anchorEl} />
      <LanguageMenu
        menuId={transMenuId}
        handleMenuClose={handleTranslationMenuClose}
        anchorEl={transMenuAnchorEl}
        handleSelectLanguage={handleSelectLanguage}
      />
      <DrawerMenu drawerState={drawerState} setDrawerState={changeDrawerState} />
    </div >
  );
}

export default AppHeader;