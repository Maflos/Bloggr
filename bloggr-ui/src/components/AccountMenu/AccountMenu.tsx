import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';
import { translate } from '../../mocks/LanguageAPIMock';
import { setLanguage } from '../../redux/reducers/headerSlice';
import { useAppSelector } from '../../redux/hooks';
import { NavLink } from 'react-router-dom';

const AccountMenu: React.FC<AccountMenuProps> = (
  {
    menuId,
    handleMenuClose,
    handleLogOut,
    handleGoToProfile,
    handleGoToSettings,
    anchorEl
  }: AccountMenuProps
) => {

  const selectedLanguage = useAppSelector(setLanguage);

  const isMenuOpen = Boolean(anchorEl);

  const closeMenu = () => {
    handleMenuClose();
  }

  const logOut = () => {
    handleLogOut();
  }

  const goToProfile = () => {
    handleGoToProfile();
  }

  const goToSettings = () => {
    handleGoToSettings();
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={closeMenu}>
      <MenuItem onClick={goToSettings} component={NavLink} to="/settings">{translate('settings', selectedLanguage)}</MenuItem>
      <MenuItem onClick={goToProfile} component={NavLink} to="/profiles">{translate('myProfile', selectedLanguage)}</MenuItem>
      <MenuItem onClick={logOut} component={NavLink} to="/login">{translate('logOut', selectedLanguage)}</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
