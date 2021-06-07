import React, { Component, useEffect } from 'react';
import styles from './Account.module.scss';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LabelIcon from '@material-ui/icons/Label';
import NotesIcon from '@material-ui/icons/Notes';
import { a11yProps } from '../../shared/tabHelpers';
import TabPanel from '../../components/TabPanel/TabPanel';
import Posts from '../Posts/Posts';
import Tags from '../Tags/Tags';
import Others from '../Others/Others';
import { Route, Switch, Link, useRouteMatch, useLocation } from 'react-router-dom';

const Account: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { path, url } = useRouteMatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('posts'))
      setValue(0);
    else if (location.pathname.includes('tags'))
      setValue(1);
    else if (location.pathname.includes('others'))
      setValue(2);
    else
      setValue(0);
  }, [location.pathname]);

  return (
    <Paper square className={styles.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example">

        <Tab icon={<MailOutlineIcon />} label="Posts" {...a11yProps(0)} component={Link} to={`${path}/posts`} />
        <Tab icon={<LabelIcon />} label="Tags"  {...a11yProps(1)} component={Link} to={`${path}/tags`} />
        <Tab icon={<NotesIcon />} label="Others" {...a11yProps(2)} component={Link} to={`${path}/others`} />
      </Tabs>

      <Switch>
        <Route exact path={path}>
          <TabPanel value={value} index={0}>
            <Posts />
          </TabPanel>
        </Route>

        <Route path={`${path}/posts`}>
          <TabPanel value={value} index={0}>
            <Posts />
          </TabPanel>
        </Route>
        <Route path={`${path}/tags`}>
          <TabPanel value={value} index={1}>
            <Tags />
          </TabPanel>
        </Route>
        <Route path={`${path}/others`}>
          <TabPanel value={value} index={2}>
            <Others />
          </TabPanel>
        </Route>
      </Switch>
    </Paper>
  );
};

export default Account;
