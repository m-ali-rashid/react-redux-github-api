import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchInput from './getGits/SearchInput'
import SearchResults from './getGits/SearchResults'

class SearchPage extends Component {
   state = {
      input:''
   }
   componentDidMount(){
     console.log(this.props);
   }
   componentDidUpdate(prevProps,prevState){
     if (prevProps != this.props)
     console.log(prevProps);
   }
   render() {
     console.log(this.props);
      return (
         <div>
            <SearchInput/>

            
              <SearchResults input={this.props.input}/>



         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      input: state.input
   }
}

export default connect(mapStateToProps)(SearchPage)
