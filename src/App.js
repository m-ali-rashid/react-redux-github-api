import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profiles from './components/Profiles'
import ProfilesListSingle from './components/gitProfiles/ProfilesListSingle'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Redirect from './components/Redirect'
import SearchPage from './components/SearchPage'
import './css/App.css'
import CssBaseline from '@material-ui/core/CssBaseline'


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gitProfiles' component={Profiles} />
          <Route exact path='/gitProfiles/:user' component={ProfilesListSingle} />
          <Route exact path='/redirecting' component={Redirect} />
          <Route exact path='/gits/:git' component={SearchPage} />
        </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
