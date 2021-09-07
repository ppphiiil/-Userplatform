import React, { createContext, useState } from 'react';

import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';

//Data for testing
import testData from './testData.js'

//PAGES
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import AllUsers from './pages/AllUsers/AllUsers';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.scss';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegisterSuccessful from './pages/RegisterSuccessful';
import Page from '../src/components/layout/Page';
import Footer from './components/Footer.js';


//CONTEXT
export const MyContext = createContext( null );





function App() {
  console.log( testData ? "TestData loaded" : "noTestData" );
  console.log( 'enter App' );
  const [isLogin, setIsLogin] = useState( false );

  const [registered, setRegistered] = useState( false );
  const [onRegister, setOnRegister] = useState( false );
  //All the Users in an Array
  const [userData, setUserData] = useState( testData );
  //For Profile Editing
  const [editState, setEditState] = useState( false );

  // after login this are the current user datas
  const [currentUser, setCurrentUser] = useState( {} );

  let history = useHistory();

  console.log( 'userData in App', userData );
  console.log( "currentUser in App:", currentUser );
  console.log( "history", history );


  return (
    <div>
      <MyContext.Provider
        value={ {
          isLogin,
          setIsLogin,
          userData,
          setUserData,
          registered,
          setRegistered,
          onRegister,
          setOnRegister,
          currentUser, setCurrentUser,
          editState, setEditState,
          history

        } }
      >

        {/* <Layout className="layout"> */ }
        <HashRouter >


          <Navigation />
          {/* <Content className="content"> */ }
          <Switch>

            <Route exact path="/">
              <Page>
                <Home />
              </Page>
            </Route>

            <Route path="/allusers">
              <Page>
                { isLogin ? <AllUsers /> : <LoginPage /> }
              </Page>
            </Route>

            <Route path="/about">
              <Page>
                <About />
              </Page>
            </Route>

            <Route path="/contact">
              <Page>
                <Contact />
              </Page>
            </Route>

            <Route path="/profile/:pathId">
              <Page>
                <ProfilePage />
              </Page>
            </Route>

            <Route path="/myprofile">
              <Page>
                <ProfilePage />
              </Page>
            </Route>

            <Route path="/registerSuccessful">
              <Page>
                <RegisterSuccessful />
              </Page>
            </Route>

            <Route path="/login">
              <Page>
                { isLogin || registered ? <AllUsers /> : <LoginPage /> }
              </Page>
            </Route>

            <Route path="/register">
              <Page>
                { isLogin ? <AllUsers /> : <RegisterPage /> }
              </Page>
            </Route>

          </Switch>
          <Footer />

        </HashRouter>
        {/* </Layout> */ }
      </MyContext.Provider>
    </div>
  );
}

export default App;
