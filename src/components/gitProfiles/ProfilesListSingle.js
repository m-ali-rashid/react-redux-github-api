import React, {/* useState,*/ useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gitActions from '../../store/actions/gitUserActions'
// import * as gitActions from '../store/actions/gitActions'
import Avatar from '@material-ui/core/Avatar';
// import { IconButton,Typography } from '@material-ui/core';
// import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles'
// import {NavLink} from 'react-router-dom'
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InsertLinkIcon from '@material-ui/icons/InsertLink';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import ProfilesListSinglePg from './ProfilesListSinglePg'

// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';

const ProfilesListSingle = (props) => {
  const userfromURL = props.match.params.user
  // console.log(props);

  useEffect(() => {
    const fetchData = async () => {
      await props.actions.getGitUser(`/users/${userfromURL}`)
        .then(console.log('loaded::::::', props))
        .catch(error => { alert("Som Tin Wong") })
    }
    fetchData()
    // console.log(props)
  }, [userfromURL])

   const useStyles = makeStyles((theme) => ({
      img: {
         margin: '0rem auto 1rem auto',
         width: '80%',
         height:'auto'
         // width: theme.spacing(50),
         // height: theme.spacing(50),
      },
   }));

  const classes = useStyles();
  console.log(props)
  const user = props.gitUser
  // const email = user.email
  // const name = user.name
  // const blog = user.blog
  // const [activeStep, setActiveStep] = useState(0);
  // const steps = 3
  //
  //   function getStepContent(step) {
  //     switch (step) {
  //       case 0:
  //         return <ProfilesListSinglePg01 userfromURL={userfromURL}/>;
  //       case 1:
  //         return <ProfilesListSinglePg02 userfromURL={userfromURL} count={user.public_repos}/>;
  //       case 2:
  //         return 'This is the bit I really care about!';
  //       default:
  //         return 'Unknown step';
  //     }
  //   }
  //
  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };
  //
  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

   return(
     <div className="container">

       {/* {console.log(user)} */}
       {
         user.length !== 0 ? (
           <div>
             <div className="row" style={{ minHeight: '70vh' }}>
               <div className="col-sm ">
                 <Avatar
                   alt={user.data.login}
                   src={user.data.avatar_url}
                   className={classes.img}
                 // variant= 'rounded'
                 />
               </div>
               <div className="col-md  text-white p-4">
                <ProfilesListSinglePg userfromURL={userfromURL} count={user.data.public_repos}/>
               </div>
             </div>
             <div className="row  text-white py-4">
               <div className="col text-center">
                 <h3 style={{ color: '#F2AF29' }}>{user.data.followers}</h3>
                 <h4>Followers</h4>
               </div>
               <div className="col text-center">
                 <h3 style={{ color: '#F2AF29' }}>{user.data.public_repos}</h3>
                 <h4>Repos</h4>
               </div>
               <div className="col text-center">
                 <h3 style={{ color: '#F2AF29' }}>{user.data.public_gists}</h3>
                 <h4>Gists</h4>
               </div>
             </div>
           </div>
         ):(
          <p className="text-white">Please Wait While Data Loads...</p>
         )
       }
     </div>


   )
}

const mapStateToProps = (state, ownProps) => {
   return {
      gitUser: state.gitUser
   }
}
function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(gitActions, dispatch)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilesListSingle)
