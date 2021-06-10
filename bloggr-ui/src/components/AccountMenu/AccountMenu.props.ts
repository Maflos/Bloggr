export default interface AccountMenuProps {
    anchorEl: null | HTMLElement;
    menuId: string;
    handleMenuClose: () => void;
    handleLogOut: () => void;
    handleGoToProfile: () => void;
    handleGoToSettings: () => void;
}