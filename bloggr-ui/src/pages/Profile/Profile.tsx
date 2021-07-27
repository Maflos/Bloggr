import React, { useEffect } from 'react';
import styles from './Profile.module.scss';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import CategoryIcon from '@material-ui/icons/Category';
import Tab from '@material-ui/core/Tab';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotesIcon from '@material-ui/icons/Notes';
import { a11yProps } from '../../shared/tabHelpers';
import TabPanel from '../../components/TabPanel/TabPanel';
import Posts from '../Posts/Posts';
import Tags from '../Categories/Categories';
import Others from '../Others/Others';
import { Route, Switch, Link, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { getLoggedUser } from '../../redux/reducers/usersSlice';
import { ProfileRoutes } from '../../constants/Routes';

const Profile: React.FC = () => {
  const loggedUser = useAppSelector(getLoggedUser);

  const [value, setValue] = React.useState(0);
  const { path, url } = useRouteMatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(ProfileRoutes.posts.title))
      setValue(0);
    else if (location.pathname.includes(ProfileRoutes.categories.title))
      setValue(1);
    else if (location.pathname.includes(ProfileRoutes.others.title))
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

        <Tab icon={<NotesIcon />} label="Posts" {...a11yProps(0)} component={Link} to={`${url}/${loggedUser?.id}/${ProfileRoutes.posts.title}`} />
        <Tab icon={<CategoryIcon />} label="Categories"  {...a11yProps(1)} component={Link} to={`${url}/${loggedUser?.id}/${ProfileRoutes.categories.title}`} />
        <Tab icon={<MoreHorizIcon />} label="Others" {...a11yProps(2)} component={Link} to={`${url}/${loggedUser?.id}/${ProfileRoutes.others.title}`} />
      </Tabs>

      <Switch>
        <Route exact path={ProfileRoutes.posts.path}>
          <TabPanel value={value} index={0}>
            <Posts />
          </TabPanel>
        </Route>
        <Route exact path={ProfileRoutes.categories.path}>
          <TabPanel value={value} index={1}>
            <Tags />
          </TabPanel>
        </Route>
        <Route exact path={ProfileRoutes.others.path}>
          <TabPanel value={value} index={2}>
            <Others />
          </TabPanel>
        </Route>

        <Route path={path}>
          <Redirect to={`${path}/${loggedUser?.id}/${ProfileRoutes.posts.title}`} />
        </Route>
      </Switch>
    </Box>
  );
};

export default Profile;