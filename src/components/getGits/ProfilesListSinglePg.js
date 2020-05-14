import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfilesListSinglePg01 from './ProfilesListSinglePg01'
import ProfilesListSinglePg02 from './ProfilesListSinglePg02'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: 'white',
        border:'2px red solid'
      },
    },
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    // backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <AppBar position="static" color="transparent">
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            // textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Intro" {...a11yProps(0)} />
            <Tab label="Repos" {...a11yProps(1)} />
            <Tab label="Gists" {...a11yProps(2)} />
          </Tabs>
          </ThemeProvider>
          </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ProfilesListSinglePg01 userfromURL={props.userfromURL} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ProfilesListSinglePg02 userfromURL={props.userfromURL} count={props.count}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Gists
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
