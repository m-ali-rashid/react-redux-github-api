import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gitActions from '../../store/actions/gitActions'
// import Button from '@material-ui/core/Button';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

function ProfilesList(props) {
   const [since, setSince] = useState(0)
   const [page, setPage] = useState(0)
   const [pageHandle, setPageHandle] = useState(false)
   const [user] = useState('')
   const [url, setURL] = useState('')
   // const [reload, setReload] = useState(0)

   const ref = useRef({
      userVariable: user,
   });

   // const prevPage = () => {
   //    pageHandle ? (setPage(page-1)):(setSince(since-1))
   // }
   // const nextPage = () => {
   //    pageHandle ? (setPage(page+1)) : (setSince(since+1))
   // }
   const handleChange = (event,paige) => {
     pageHandle ? setPage(paige-1) : setSince(paige-1)
     // console.log(paige);
   }

   useEffect(() => {
      // console.log("render!");
      (props.user === '') ? setPageHandle(false) : setPageHandle(true)
      const newUser = props.user;
      const prevUser = ref.current.userVariable;
      // const prevReloader = ref.current.reloadVariable;

      const fetchData = async () => {
         const urll = (props.user === "") ? `/users?since=${since * 30}` : `/search/users?q=${props.user}&page=${page + 1}`
         setURL(urll)
         await props.actions.getGit(urll)
            // .then(console.log(props))
            .catch(error => { alert("Som Tin Wong") })
         }

      if (prevUser !== newUser) { setPage(0) }

      fetchData()

      // update Ref
      ref.current.userVariable = props.user
      // ref.current.reloadVariable = props.reloader

      //unmounting
      // return () => { console.log("unmounting...");}
   },[since,page,props.user]);

   const count = props.user ? (
     (props.gits.data.total_count <= 1000) ? (
       Math.ceil(props.gits.data.total_count / 30)
     ) : (
       Math.ceil(1000/30)
     )
   ) : 'nops'

   return (
      <>
         <Grid container justify="center">
         {/*console.log(count)*/}
         <ThemeProvider theme={theme}>
         {
           count === 'nops' ? (
             <Pagination count={100} page={pageHandle ? page+1 : since+1} onChange={handleChange} color="primary"/>
           ):(
             <Pagination count={count} page={pageHandle ? page+1 : since+1} onChange={handleChange} color="primary"/>
           )
         }

         </ThemeProvider>
          {/*
            <Button onClick={prevPage} color="primary"><ArrowBackIosIcon style={{ fontSize: 40 }} /></Button>
            <Button onClick={nextPage} color="primary"><ArrowForwardIosIcon style={{ fontSize: 40 }} /></Button>
          */}
         </Grid>
         <ProfilesListSearched user={props.user} url={url} />
      </>
   );
}

const mapStateToProps = (state, ownProps) => {
   return {
      gits: state.gits
   }
}
function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(gitActions, dispatch)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilesList)
