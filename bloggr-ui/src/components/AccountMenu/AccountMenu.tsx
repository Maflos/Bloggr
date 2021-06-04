import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';
import { translate } from '../../mocks/LanguageAPIMock';
import { setLanguage } from '../../redux/reducers/headerSlice';
import { useAppSelector } from '../../redux/hooks';

const AccountMenu: React.FC<AccountMenuProps> = (
  {
    menuId,
    handleMenuClose,
    handleLogOut,
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

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={closeMenu}>
      <MenuItem onClick={closeMenu}>{translate('profile', selectedLanguage)}</MenuItem>
      <MenuItem onClick={closeMenu}>{translate('myAccount', selectedLanguage)}</MenuItem>
      <MenuItem onClick={logOut}>{translate('logOut', selectedLanguage)}</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
