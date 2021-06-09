import React, { useEffect } from 'react';
import styles from './Account.module.scss';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import CategoryIcon from '@material-ui/icons/Category';
import Tab from '@material-ui/core/Tab';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LabelIcon from '@material-ui/icons/Label';
import NotesIcon from '@material-ui/icons/Notes';
import { a11yProps } from '../../shared/tabHelpers';
import TabPanel from '../../components/TabPanel/TabPanel';
import Posts from '../Posts/Posts';
import Tags from '../Categories/Categories';
import Others from '../Others/Others';
import { Route, Switch, Link, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { AccountRoute } from '../../constants/Routes';

const Account: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { path, url } = useRouteMatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(AccountRoute.children[0].title))
      setValue(0);
    else if (location.pathname.includes(AccountRoute.children[1].title))
      setValue(1);
    else if (location.pathname.includes(AccountRoute.children[2].title))
      setValue(2);
    else
      setValue(0);
  }, [location.pathname]);

  return (
    <Box className={styles.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example">

        <Tab icon={<NotesIcon />} label="Posts" {...a11yProps(0)} component={Link} to={`${path}${AccountRoute.children[0].path}`} />
        <Tab icon={<CategoryIcon />} label="Categories"  {...a11yProps(1)} component={Link} to={`${path}${AccountRoute.children[1].path}`} />
        <Tab icon={<MoreHorizIcon />} label="Others" {...a11yProps(2)} component={Link} to={`${path}${AccountRoute.children[2].path}`} />
      </Tabs>

      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}${AccountRoute.children[0].path}`} />
        </Route>
        <Route path={`${path}${AccountRoute.children[0].path}`}>
          <TabPanel value={value} index={0}>
            <Posts />
          </TabPanel>
        </Route>
        <Route path={`${path}${AccountRoute.children[1].path}`}>
          <TabPanel value={value} index={1}>
            <Tags />
          </TabPanel>
        </Route>
        <Route path={`${path}${AccountRoute.children[2].path}`}>
          <TabPanel value={value} index={2}>
            <Others />
          </TabPanel>
        </Route>
      </Switch>
    </Box>
  );
};

export default Account;
