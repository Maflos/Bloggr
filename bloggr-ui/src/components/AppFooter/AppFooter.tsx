import React from 'react';
import { useStyles } from './AppFooter.styles';

const AppFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      AppFooter Component
    </div>
  );
};

export default AppFooter;
