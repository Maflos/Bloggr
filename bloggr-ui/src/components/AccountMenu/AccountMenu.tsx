import React, { useEffect } from 'react';
import styles from './AccountMenu.module.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';

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
      <MenuItem onClick={closeMenu}>Profile</MenuItem>
      <MenuItem onClick={closeMenu}>My account</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
