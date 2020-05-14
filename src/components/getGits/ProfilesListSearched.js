import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
// import { NavLink } from 'react-router-dom'
// import Avatar from '@material-ui/core/Avatar';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
   root: {
			minWidth: 275,
			maxWidth:300,
			background:'white',
			color: 'white',
			padding:'1rem'
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
		 fontSize: 14,
		 color: 'white'
   },
   pos: {
		 marginBottom: 12,
	 },
	button: {
		width:'100%'
	},
	img: {
		margin: '0rem auto 1rem auto',
		width: theme.spacing(20),
		height: theme.spacing(20),
	}
}));

const ProfilesListSearched = (props) => {
   // const classes = useStyles();
   console.log('howdu',props);
	 // const users = props.user ? props.gits.data.items : props.gits.data
   // console.log(props.user ? props.gits.data.total_count : 'nops');
   return(
				 <Grid container justify="center" spacing={2} style={{margin:'0 -1rem'}}>
				 {/*
           users ? (
					users.map(user => (
					<Grid key={user.id} item>
					 <Card className={classes.root} variant="outlined">
						 <CardContent>
							 <Avatar alt={user.login} src={user.avatar_url} className={classes.img} />
							 <Typography variant="h5" color="textPrimary" component="h2" align='center'>
								{user.login}
								<a href={user.html_url} rel="noopener noreferrer" target="_blank">
									<IconButton>
										<GitHubIcon/>
									</IconButton>
								</a>
							 </Typography>
						 </CardContent>
						 <CardActions>
								 <Button component={NavLink} to={'/gits/'+user.login} size="small" variant="contained" color="primary" disableElevation className={classes.button}>Learn More</Button>
						 </CardActions>
					 </Card>
					 </Grid>
				 ))
       ):(
         <div className="my-4 text-white text-center">
          <h2>Please Wait</h2>
          <h3>While Data loads</h3>
         </div>
       )
				 */}

				 </Grid>
   )
}
const mapStateToProps = (state, ownProps) => {
   return {
      gits: state.gits
   }
}

export default connect(mapStateToProps)(ProfilesListSearched)
