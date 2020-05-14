import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
// import avatar from '../images/avatar.png'
import Typed from 'react-typed';
// import SearchInput from './SearchInput'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   avatar: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      marginTop: '3rem',
      marginBotton: '3rem'
      // margin: '6rem auto 1rem auto'
   },
   title: {
      paddingLeft:'1rem',
      fontFamily: 'Space Mono',
      color: 'white'
   },
   subtitle: {
      paddingLeft:'1.5rem',
      fontFamily: 'Space Mono',
      color: 'white'
   },
   typedContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '100vw',
      // textAlign: 'center',
      zIndex: 1,
   }
}));

const Header = () => {
   const classes = useStyles();
   return (
      <Box className={classes.typedContainer}>
         <Grid container justify='center'>
            {/* <Avatar className={classes.avatar} src={avatar} alt="Batman" /> */}
            {/* <SearchInput/> */}
         </Grid>
         <Typography className={classes.title} variant="h2">
            <Typed
               strings={['Hello, World!']}
               typeSpeed={300}
               backSpeed={100}
            />
         </Typography>
         <br /><br />
         <Typography className={classes.subtitle} variant="h4">
            <Typed
               strings={[
                  'Welcome',
                  'I am a cloned OctoCat',
                  'click menu to get Git Data...'
                  ]}
               typeSpeed={150}
               backSpeed={70}
               >
            </Typed>
         </Typography>
      </Box>
   )
}

export default Header
