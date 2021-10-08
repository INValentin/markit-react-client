import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'

import { Home, Account, View } from './pages'
import MessageProvider from './Contexts/MessageContext'
import UserProvider, { useUser, useUserUpdate } from './Contexts/AuthContext'
import Login from './pages/Auth/Login'
import { useAuthApi } from './hooks/useApi'
import Modal, { useModal } from './components/Modal/Modal'
// import Messages from './components/Messages/Messages'

function App() {

  return (
    <UserProvider>
      <MessageProvider>
        {/* <Messages /> */}
        <Router>
            <Switch>
              <Route path="/home" exact component={() => <Layout><Home /></Layout>} />
              <Route path="/view" exact component={() => <Layout><View /></Layout>} />
              <Route path="/Login" exact component={() => <Layout><Login /></Layout>} />
              <Route path="/account" exact component={() => <Layout><Account /></Layout>} />
              <Redirect to="/home" />
            </Switch>
        </Router>
      </MessageProvider>
    </UserProvider>
  );
}

function Layout({ children }) {
  const { loading, currentUser } = useAuthApi()
  const [userLoaded, setUserLoaded] = useState(false)
  const user = useUser()
  const updateUser = useUserUpdate()
  const { show, hideModal, showModal } = useModal()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (!user && !userLoaded) {
      currentUser()
        .then(async res => {
          if (!res.ok && res.status === 401) {
            if (location.pathname !== '/login') {
               history.push('/login')
            }
            return
            
          }
          const user = await res.json()
          if (user) {
            console.log({ user })
            updateUser(user)
          } else {
            if (location.pathname !== '/login') {
              history.push('/login')
            }
          }
        })
      setUserLoaded(true)
    }
  }, [user, userLoaded, location, currentUser, history, updateUser])

  useEffect(() => {
    if ((!loading && userLoaded) || user) {
      hideModal()
    } else {
      !show && showModal()
    }
  }, [loading, show, user, userLoaded, hideModal, showModal])

  useEffect(() => {
    if (user && location.pathname === '/login') {
      history.push('/home')
    }
  }, [user, history, location])

  return (
    <main className="appWrapper">
      <Modal show={show} onHide={() => null}>
        <div className="loginLoader">
          <span className="loader"></span>
        </div>
      </Modal>
      {
        ((userLoaded && !loading)||user) &&
        <React.Fragment>
          <Nav />
          <div className="content">
            <div className="contentWrapper">
              {children}
            </div>
          </div>
          <footer>
            <span>&copy;UR - 2021 | ISHIMWE Valentin</span>
          </footer>
        </React.Fragment>
      }
    </main>
  )
}

export default App;
