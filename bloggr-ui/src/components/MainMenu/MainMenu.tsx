import React from 'react';
import styles from './MainMenu.module.scss';
import Home from '../Home/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const MainMenu: React.FC = () => (
  <div className={styles.MainMenu}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={styles.MenuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.Title}>
          Bloggr
        </Typography>
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact">Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default MainMenu;
