// import postReducer from './postReducer.js'
import gitReducer from './gitReducer.js'
import gitReposReducer from './gitReposReducer.js'
import gitUserReducer from './gitUserReducer.js'
import userReducer from './userReducer.js'
import inputReducer from './searchInputReducer.js'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   // posts: postReducer,
   gits: gitReducer,
   gitRepos: gitReposReducer,
   gitUser: gitUserReducer,
   user: userReducer,
   input: inputReducer
})

export default rootReducer
