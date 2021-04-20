import LANGUAGES from '../../common/LanguageConstants';

export default interface LanguageMenuProps {
    anchorEl: null | HTMLElement;
    menuId: string;
    handleMenuClose: () => void;
    handleSelectLanguage: (selectedLanguage: LANGUAGES) => void;
}