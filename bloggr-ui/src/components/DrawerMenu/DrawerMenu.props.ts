import React from 'react';

export default interface DrawerMenuProps {
    drawerState: boolean;
    setDrawerState: (open: boolean) => void;
}