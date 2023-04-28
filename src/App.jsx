

import { Fragment } from 'react'
import './App.css'
import Signin from './components/SignIn'
import { useSelector } from 'react-redux'
import Home from './components/Home'
function App() {

  const isloggedIn = useSelector(state => state.auth.isloggedIn)
  return (
    <Fragment>
      {isloggedIn && <Home />}
      {!isloggedIn&&<Signin />}
    </Fragment> 
  )
}

export default App
