import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LanguageMenuProps from './LanguageMenu.prosps';
import { translate } from '../../mocks/LanguageAPIMock';
import LANGUAGES from '../../constants/Translations';
import { selectLanguage as slctLanguage } from '../../redux/reducers/headerSlice';
import { useAppSelector } from '../../redux/hooks';

const LanguageMenu: React.FC<LanguageMenuProps> = (
  {
    menuId,
    handleMenuClose,
    anchorEl,
    handleSelectLanguage
  }: LanguageMenuProps) => {

  const selectedLanguage = useAppSelector(slctLanguage);

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
      <MenuItem selected={LANGUAGES.EN === selectedLanguage} onClick={selectLanguage(LANGUAGES.EN)}>{translate('english', selectedLanguage)}</MenuItem>
      <MenuItem selected={LANGUAGES.RO === selectedLanguage} onClick={selectLanguage(LANGUAGES.RO)}>{translate('romanian', selectedLanguage)}</MenuItem>
    </Menu>
  );
}

export default LanguageMenu;
