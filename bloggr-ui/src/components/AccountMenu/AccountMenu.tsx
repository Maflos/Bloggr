import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';
import { Constants } from '../../common/Constants';

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
      <MenuItem onClick={closeMenu}>{Constants.profile}</MenuItem>
      <MenuItem onClick={closeMenu}>{Constants.myAccount}</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
