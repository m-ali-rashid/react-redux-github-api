import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ProfilesList from './ProfilesList'
import SearchInput from './gitProfiles/SearchInput'
import Hooks from './gitProfiles/Hooks'

class Profiles extends Component {
   state = {
      name:''
   }
   componentDidMount(){
   }
   render() {
      return (
         <div>
            <SearchInput/>
            <Hooks user={this.props.user}/>
         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      user: state.user
   }
}

export default connect(mapStateToProps)(Profiles)
