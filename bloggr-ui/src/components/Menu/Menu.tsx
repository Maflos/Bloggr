import React from 'react';
import styles from './Menu.module.scss';
import Home from '../Home/Home';

const routes = [
  {
    path: "/home",
    component: Home
  }
];

const Menu: React.FC = () => (
  <div className={styles.Home}>
    Home Component
  </div>
);

export default Menu;
