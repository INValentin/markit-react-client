import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { Home, Account, View } from "./pages";
import MessageProvider from "./Contexts/MessageContext";
import UserProvider, { useUser, useUserUpdate } from "./Contexts/AuthContext";
import Login from "./pages/Auth/Login";
import { useAuthApi } from "./hooks/useApi";
import Modal, { useModal } from "./components/Modal/Modal";
import useToken from "./hooks/useToken";
// import AuthIn from "./components/AuthIn/AuthIn";
// import Messages from './components/Messages/Messages'

function App() {
  return (
    <UserProvider>
      <MessageProvider>
        {/* <Messages /> */}
        <Router>
          <Switch>
            <Route
              path="/home"
              exact
              component={() => (
                <Layout>
                  <Home />
                </Layout>
              )}
            />
            <Route
              path="/view"
              exact
              component={() => (
                <Layout>
                  <View />
                </Layout>
              )}
            />
            <Route
              path="/Login"
              exact
              component={() => (
                <Layout>
                  <Login />
                </Layout>
              )}
            />
            <Route
              path="/account"
              exact
              component={() => (
                <Layout>
                  <Account />
                </Layout>
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </MessageProvider>
    </UserProvider>
  );
}

function Layout({ children }) {
  const { loading, currentUser } = useAuthApi();
  const [userLoaded, setUserLoaded] = useState(false);
  const user = useUser();
  const updateUser = useUserUpdate();
  const { show, hideModal, showModal } = useModal();
  const history = useHistory();
  const location = useLocation();
  const { hasToken } = useToken();

  useEffect(() => {
    if (!hasToken()) {
      if (location.pathname !== "/login") {
        history.push("/login");
      }
      return undefined;
    }
    if (!user && !userLoaded) {
      currentUser().then(async (res) => {
        if (!res.ok && res.status === 401) {
          if (location.pathname !== "/login") {
            history.push("/login");
          }
          return;
        }
        const user = await res.json();
        if (user) {
          updateUser(user);
        } else {
          if (location.pathname !== "/login") {
            history.push("/login");
          }
        }
      });
      setUserLoaded(true);
    }
  }, [user, userLoaded, location, hasToken, currentUser, history, updateUser]);

  useEffect(() => {
    if ((!loading && userLoaded) || user) {
      hideModal();
    } else {
      !show && showModal();
    }
  }, [loading, show, user, userLoaded, hideModal, showModal]);

  useEffect(() => {
    if (user && location.pathname === "/login") {
      history.push("/home");
    }
  }, [user, history, location]);

  return (
    <main className="appWrapper">
      <Modal show={loading} onHide={() => null}>
        <div className="loginLoader">
          <span className="loader big"></span>
          {/* <p style={{marginTop: '0rem'}}>Authenticating...</p> */}
        </div>
      </Modal>
      {(user || location.pathname === "/login") && (
        <React.Fragment>
          <Nav />
          <div className="content">
            <div className="contentWrapper">{children}</div>
          </div>
          <footer>
            <span>&copy;UR - 2021</span>
          </footer>
        </React.Fragment>
      )}
    </main>
  );
}

export default App;
