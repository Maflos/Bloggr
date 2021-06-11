import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import { Box, ListItem, ListItemText } from '@material-ui/core';
import { AppRoutes } from '../../constants/Routes';
import { translate } from '../../mocks/LanguageAPIMock';
import styles from './AppHeader.module.scss';
import AccountMenu from '../AccountMenu/AccountMenu';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import UserHeaderOptions from '../UserHeaderOptions/UserHeaderOptions';
import LANGUAGES from '../../constants/Translations';
import { changeLanguage, setLanguage } from '../../redux/reducers/headerSlice';
import { changeLogInState } from '../../redux/reducers/usersSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const AppHeader: React.FC = () => {

  const selectedLanguage = useAppSelector(setLanguage);
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerState, setDrawerState] = React.useState<boolean>(false);
  const [transMenuAnchorEl, setTransMenuAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuId = 'primary-account-menu';
  const transMenuId = 'primary-translation-menu';

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    dispatch(changeLogInState(false));
  }

  const handleGoToProfile = () => {
    setAnchorEl(null);
  }

  const handleGoToSettings = () => {
    setAnchorEl(null);
  }

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTranslationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setTransMenuAnchorEl(event.currentTarget);
  };

  const handleTranslationMenuClose = () => {
    setTransMenuAnchorEl(null);
  }

  const handleSelectLanguage = (selectedLanguage: LANGUAGES) => {
    dispatch(changeLanguage(selectedLanguage));
    setTransMenuAnchorEl(null);
  }

  const changeDrawerState = (open: boolean) => {
    setDrawerState(open);
  }

  return (
    <div className={styles.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Box className={styles.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => { setDrawerState(true); }}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography className={styles.title} variant="h6" noWrap>
            {translate('appName', selectedLanguage)}
          </Typography>
          <Box className={styles.mainMenu}>
            <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>
              {AppRoutes.map(({ title, path }) => (
                <ListItem button key={title} component={NavLink} to={path} activeClassName={'Mui-selected'}>
                  <ListItemText>{translate(title, selectedLanguage)}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          <div className={styles.grow} />
          <UserHeaderOptions
            menuId={menuId}
            transMenuId={transMenuId}
            handleTranslationMenuOpen={handleTranslationMenuOpen}
            handleProfileMenuOpen={handleProfileMenuOpen}
          />
        </Toolbar>
      </AppBar>
      <AccountMenu
        menuId={menuId}
        handleMenuClose={handleMenuClose}
        handleLogOut={handleLogOut}
        handleGoToProfile={handleGoToProfile}
        handleGoToSettings={handleGoToSettings}
        anchorEl={anchorEl} />
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