import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gitActions from '../../store/actions/gitReposActions'
// import Avatar from '@material-ui/core/Avatar';
// import { IconButton, Typography } from '@material-ui/core';
// import Typed from 'react-typed';
// import { makeStyles } from '@material-ui/core/styles'
// import {NavLink} from 'react-router-dom'
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InsertLinkIcon from '@material-ui/icons/InsertLink';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Button from '@material-ui/core/Button';
import Tables from './Tables'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiPaginationItem: {
      root: {
        color: 'white',
      },
    },
  },
});
const ProfilesListSingle = (props) => {
   const userfromURL = props.userfromURL
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)

   useEffect(() => {
      const fetchData = async () => {
         await props.actions.getGitRepos(`/users/${userfromURL}/repos?page=${page}&&per_page=5`)
            .then( setLoading(false), console.log('loaded:::',props))
            .catch(error => {alert("Som Tin Wong")})
      }
      fetchData()
   },[page])

   const handleChange = (event,pag) => {setPage(pag)}
   const repos = props.gitRepos.data ? props.gitRepos.data : []

   // console.log(props.gitRepos.data)

   return (
          repos.length ?(
            <>
              <Tables />
              <div className="my-3">
                <ThemeProvider theme={theme}>
                  <Pagination count={Math.ceil(props.count/5)} page={page} onChange={handleChange} color="primary"/>
                </ThemeProvider>
              </div>
            </>
          ):(
            <p className="text-white">Please Wait While Data Loads...</p>
          )
   )
}

const mapStateToProps = (state, ownProps) => {
   return {
      gitRepos: state.gitRepos
   }
}
function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(gitActions, dispatch)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilesListSingle)
