import React, { useState } from 'react'
import {
   // AppBar,
   // Toolbar
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import { useHistory } from 'react-router-dom'
import { fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/searchInputActions'

const useStyles = makeStyles(theme => ({
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.5),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.7),
      },
      margin: '1rem auto 2rem auto',
      maxWidth: theme.spacing(60),
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

const SearchInput = (props) => {
   const [state, setState] = useState({
      input: ''
   })
   const handleChange = (e) => {
      setState({ input: e.target.value })
   }
   const handleSearch = (e) => {
      e.preventDefault()
      // let history = useHistory()
      props.actions.searchInput(state.input)
      // setState({ ...state, search: true })
      // history.push('/gitProfiles')
      console.log(props);
   }

   const classes = useStyles()
   return (
      <div style={{padding:'1rem'}}>
        <div className={classes.search}>
           <div className={classes.searchIcon}>
              <SearchIcon />
           </div>
           <form onSubmit={handleSearch}>
              <InputBase
                 onChange={handleChange}
                 placeholder="Search…"
                 classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                 }}
                 inputProps={{ 'aria-label': 'search' }}
              />
           </form>
        </div>
      </div>
   )
}
const mapStateToProps = (state, ownProps) => {
   return {
      input: state.input,
      // params: ownProps
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      actions: bindActionCreators(actions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
// export default SearchInput
