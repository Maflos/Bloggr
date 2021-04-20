import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LanguageMenuProps from './LanguageMenu.prosps';
import { translate, getLanguage } from '../../common/LanguageUtils';
import LANGUAGES from '../../common/LanguageConstants';

const LanguageMenu: React.FC<LanguageMenuProps> = (
  {
    menuId,
    handleMenuClose,
    anchorEl,
    handleSelectLanguage
  }: LanguageMenuProps) => {

  const isMenuOpen = Boolean(anchorEl);

  const closeMenu = () => {
    handleMenuClose();
  }

  const selectLanguage = (selectedLanguage: LANGUAGES) => (event: React.MouseEvent<HTMLElement>) => {
    handleSelectLanguage(selectedLanguage);
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
      <MenuItem selected={LANGUAGES.EN === getLanguage()} onClick={selectLanguage(LANGUAGES.EN)}>{translate('english')}</MenuItem>
      <MenuItem selected={LANGUAGES.RO === getLanguage()} onClick={selectLanguage(LANGUAGES.RO)}>{translate('romanian')}</MenuItem>
    </Menu>
  );
}

export default LanguageMenu;
