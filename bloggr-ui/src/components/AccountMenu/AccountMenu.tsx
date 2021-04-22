import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';
import { translate } from '../../mocks/LanguageAPIMock';

const AccountMenu: React.FC<AccountMenuProps> = ({ menuId, handleMenuClose, anchorEl }: AccountMenuProps) => {

  const isMenuOpen = Boolean(anchorEl);

  const closeMenu = () => {
    handleMenuClose();
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
      <MenuItem onClick={closeMenu}>{translate('profile')}</MenuItem>
      <MenuItem onClick={closeMenu}>{translate('myAccount')}</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
