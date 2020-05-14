import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gitActions from '../../store/actions/gitReposActions'
import Grid from '@material-ui/core/Grid';
import ProfilesListSearched from './ProfilesListSearched'
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

function SearchResults(props) {
   const [since, setSince] = useState(0)
   const [page, setPage] = useState(0)
   const [pageHandle, setPageHandle] = useState(false)
   const [input] = useState('')
   const [url, setURL] = useState('')
   // const [reload, setReload] = useState(0)

   const ref = useRef({
      inputRef: input,
   });

   const handleChange = (event,paige) => {
     pageHandle ? setPage(paige-1) : setSince(paige-1)
   }

   useEffect(() => {
      (props.input === '') ? setPageHandle(false) : setPageHandle(true)
      const newInput = props.input;
      const prevInput = ref.current.inputRef;
      // console.log("handler:::",pageHandle);
      const fetchData = async () => {
         const urll = (props.input === "") ? `/search/repositories?q=react` : `/search/repositories?q=${props.input}`
         // const urll = `/search/repositories?q=${props.input}`
         await props.actions.getGitRepos(urll)
            .catch(error => { alert("Som Tin Wong") })
         }

      if (prevInput !== newInput) { setPage(0) }

      fetchData()

      // update Ref
      ref.current.inputRef = props.input

      //unmounting
      // return () => { console.log("unmounting...");}
   },[since,page,props.input]);

   // const count = props.input ? (
   //   (props.gits.data.total_count <= 1000) ? (
   //     Math.ceil(props.gits.data.total_count / 30)
   //   ) : (
   //     Math.ceil(1000/30)
   //   )
   // ) : 'nops'
   console.log(props);

   return (
      <>
         <Grid container justify="center">
         {/*
         <ThemeProvider theme={theme}>
           count === 'nops' ? (
             <Pagination count={100} page={pageHandle ? page+1 : since+1} onChange={handleChange} color="primary"/>
           ):(
             <Pagination count={count} page={pageHandle ? page+1 : since+1} onChange={handleChange} color="primary"/>
           )
         </ThemeProvider>
         */}
         </Grid>
         {/*
         <ProfilesListSearched input={props.input} url={url} />
         */}
      </>
   );
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
