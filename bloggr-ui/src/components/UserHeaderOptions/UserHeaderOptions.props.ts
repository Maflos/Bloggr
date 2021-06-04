export default interface UserHeaderOptionsProps {
    transMenuId: string;
    menuId: string;
    handleTranslationMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}