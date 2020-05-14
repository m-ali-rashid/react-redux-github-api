import React /*,{ useEffect, useState } */from 'react'
import { connect } from 'react-redux'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Tables from './Tables'


const ProfilesListSingle = (props) => {

   const user = props.gits
   const email = user.data.email
   const blog = user.data.blog

   return (
         <div>
            <h1 className="my-4">Hey...</h1>
            <h2 className="my-4">My name is <span style={{ color: '#F2AF29' }}>{user.data.name}</span></h2>
            <h6 className="my-4 text-muted">{user.data.bio}</h6>
            <a href={user.data.html_url} rel="noopener noreferrer" target="_blank">
               <IconButton className="text-white" >
                  <GitHubIcon />
               </IconButton>
            </a>
            {
               blog ? (
                  <a href={user.data.blog} rel="noopener noreferrer" target="_blank">
                     <IconButton className="text-white" >
                        <InsertLinkIcon />
                     </IconButton>
                  </a>
               ):('')
            }
            {
               email ? (
                  <CopyToClipboard text={email}
                     onCopy={() => alert(`Email: ${email} has been copied to the clipboard`)}>
                     <span>Copy to clipboard with span</span>
                  </CopyToClipboard>
               ) : ('')
            }
         </div>
   )
}

const mapStateToProps = (state, ownProps) => {
   return {
      gits: state.gitUser
   }
}

export default connect(mapStateToProps)(ProfilesListSingle)
