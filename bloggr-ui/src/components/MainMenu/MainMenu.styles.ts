import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            display: 'block',
        },
        menuButton: {
            marginRight: '16px',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        rightMenu: {
            display: 'flex',
        },
        navDisplayFlex: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
                justifyContent: 'space-between',
            },
        }
    }),
);