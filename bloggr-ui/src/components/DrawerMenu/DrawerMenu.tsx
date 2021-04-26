import React from 'react';
import DrawerMenuProps from './DrawerMenu.props';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styles from './DrawerMenu.module.scss';
import { Routes } from '../../constants/Routes';
import { NavLink } from 'react-router-dom';
import { translate } from '../../mocks/LanguageAPIMock';
import { selectLanguage } from '../../redux/reducers/headerSlice';
import { useAppSelector } from '../../redux/hooks';

const DrawerMenu: React.FC<DrawerMenuProps> = ({ drawerState, setDrawerState }) => {

  const selectedLanguage = useAppSelector(selectLanguage);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  }

  const list = () => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Routes.map((route, index) => (
          <ListItem button key={route.title} component={NavLink} to={route.path} activeClassName={'Mui-selected'}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText>
              {translate(route.title, selectedLanguage)}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerMenu;
