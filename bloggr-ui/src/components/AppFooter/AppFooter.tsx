import React from 'react';
import Box from '@material-ui/core/Box';
import styles from './AppFooter.module.scss';
import { Container, Divider, Grid, IconButton, Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Links } from '../../constants/Links';
import { translate } from '../../mocks/LanguageAPIMock';

const AppFooter: React.FC = () => {
  const copyright = '© ' + new Date().getFullYear() + ' ' + translate('appName');

  return (
    <Box className={styles.footerContainer}>
      <Divider />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography align={'center'} variant={'h6'} className={styles.sectionTitle}>{translate('legal')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align={'center'} variant={'h6'} className={styles.sectionTitle}>{translate('social')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align={'center'}>{translate('terms')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align={'center'}>
              <Link href={Links.facebook}>
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align={'center'}>{translate('cookies')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align={'center'}>
              <Link href={Links.linkedIn}>
                <IconButton color="inherit">
                  <LinkedInIcon />
                </IconButton>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={styles.sectionTitle} align={'center'}>{translate('appName')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={styles.sectionTitle} align={'center'}>{copyright}</Typography>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default AppFooter;
