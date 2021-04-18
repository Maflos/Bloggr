import React, { useEffect } from 'react';
import styles from './AccountMenu.module.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountMenuProps from './AccountMenu.props';

const AccountMenu: React.FC<AccountMenuProps> = ({ openMenuEvent, menuId, ...props }: AccountMenuProps) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    //handleMobileMenuClose();
  };

  useEffect(() => {
    setAnchorEl(openMenuEvent);
  }, [openMenuEvent]);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}

export default AccountMenu;
