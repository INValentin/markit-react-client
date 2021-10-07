import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Home, Account, View } from './pages'
import MessageProvider from './Contexts/MessageContext'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
// import Messages from './components/Messages/Messages'

function App() {
  return (
    <MessageProvider>
      {/* <Messages /> */}
      <Router>
        <Switch>
          <Route path="/home" exact component={() => <Layout><Home /></Layout>} />
          <Route path="/view" exact component={() => <Layout><View /></Layout>} />
          <Route path="/Login" exact component={() => <Layout><Login /></Layout>} />
          <Route path="/register" exact component={() => <Layout><Register /></Layout>} />
          <Route path="/account" exact component={() => <Layout><Account /></Layout>} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </MessageProvider>
  );
}

function Layout({ children }) {
  return (
    <main className="appWrapper">
      <Nav />
      <div className="content">
        <div className="contentWrapper">
          {children}
        </div>
      </div>
      <footer>
        <span>&copy;UR - 2021 | ISHIMWE Valentin</span>
      </footer>
    </main>
  )
}

export default App;
