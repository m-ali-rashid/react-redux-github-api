import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {
	// AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Avatar,
	Divider,
	List,
	// Typography,
	Box
} from "@material-ui/core"
import {
	AssignmentInd,
	Home,
	Apps,
	ContactMail
} from "@material-ui/icons"
import DehazeIcon from '@material-ui/icons/Dehaze';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/core/styles"
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import avatar from "../images/avatar.png"
// import {Redirect} from 'react-router-dom'

import { fade } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

// const theme = useTheme();

const useStyles = makeStyles(theme=>({
	menuSliderContainer:{
		width:250,
		background:"#511",
		height:"100%"
	},
	avatar:{
		display:"block",
		margin:'0.5rem auto',
		width: theme.spacing(13),
		height: theme.spacing(13)
	},
	listItem:{
		color:'white'
	},
	listLink:{
		textDecoration:'none'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		margin: '0 auto',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			// marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))

const menuItems = [
	{
		listIcon: <Home/>,
		listText: 'Home',
		listLink: '/'
	},
	{
		listIcon: <AssignmentInd/>,
		listText: 'Github Users',
		// listLink: '/redirecting'
		listLink: '/gitProfiles'
	},
	{
		listIcon: <Apps/>,
		listText: 'Github Repositories',
		listLink: '/gits/repos'
		// listLink: '/gitRepos'
	},
	{
		listIcon: <ContactMail/>,
		listText: 'Github Gists',
		listLink: '/gits/gists'
		// listLink: '/gitGists'
	}
]

const Navbar = () => {
	const [state, setState] = useState({
		right:false,
		// search:false
	})

	const toggleSlider = (slider,open) => () => {
		setState({...state,[slider]:open})
	}
	// const handleSearch = (e) => {
	// 	e.preventDefault()
	// 	setState({ ...state, search: true })
	// }

	const classes = useStyles()
	const sideList = slider => (
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar className={classes.avatar} src={avatar} alt="Batman" />
			<Divider />
			<List>
				{
					menuItems.map((lstItem, key) => (
					<ListItem button key={key} component={NavLink} to={lstItem.listLink} reloader={'howdy'} onClick={toggleSlider(slider,false)}>
						<ListItemIcon className={classes.listItem}>
							{lstItem.listIcon}
						</ListItemIcon>
						<ListItemText className={classes.listItem} primary={lstItem.listText} />
					</ListItem>
					))
				}
			</List>
		</Box>
	 )
	return (
		<div>
		<Box component="nav">
			<Toolbar>
					<IconButton style={{ color: 'white', marginRight: 'auto' }} component={NavLink} to='/redirecting'>
					<GitHubIcon/>
				</IconButton>
				<IconButton style={{ color: 'white'}} onClick={toggleSlider('right', true)}>
					<DehazeIcon/>
				</IconButton>
			</Toolbar>
				<MobilRightMenuSlider
				anchor='right'
				open={state.right}
				onClose={toggleSlider('right')}
			>
				{sideList('right')}
			</MobilRightMenuSlider>
		</Box>
		</div>
	)
}

export default Navbar
