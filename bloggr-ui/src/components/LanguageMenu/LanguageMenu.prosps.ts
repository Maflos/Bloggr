import LANGUAGES from '../../constants/Translations';

export default interface LanguageMenuProps {
    anchorEl: null | HTMLElement;
    menuId: string;
    handleMenuClose: () => void;
    handleSelectLanguage: (selectedLanguage: LANGUAGES) => void;
}