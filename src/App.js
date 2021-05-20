import React, { createContext, useState, useEffect } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import testData from './testData.js'



//PAGES
import Navigation from './components/navigation/Navigation';
import Home from './components/pages/Home';
import AllUsers from './components/pages/AllUsers/AllUsers';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './index.scss';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import RegisterSuccessful from './components/pages/RegisterSuccessful';
import Page from '../src/components/layout/Page';

//LAYOUT ANDT
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

//CONTEXT
export const MyContext = createContext( null );

//TESTDATA


const initialUser = {
  "id": "",
  "name": "",
  "username": "",
  "email": "",
  "userimage": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "leer",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  },
  "phone": "",
  "website": "",
  "portfolio": {
    "portfolioimage1": "",
    "portfolioimage2": "",
    "portfolioimage3": "",
  },
  "tags": [],
  "company": {
    "name": "",
    "catchPhrase": "",
    "bs": ""
  }
}

function App() {
  console.log( testData );
  console.log( 'into App' );
  const [isLogin, setIsLogin] = useState( false );
  const [registered, setRegistered] = useState( false );
  const [userData, setUserData] = useState( testData );
  const [onRegister, setOnRegister] = useState( false );
  const [user, setUser] = useState( initialUser );
  const [currentUser, setCurrentUser] = useState( {} );

  console.log( 'userData in App', userData );
  console.log( "setcurrent user is:", currentUser );




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
          user,
          setUser,
          currentUser, setCurrentUser,
          initialUser

        } }
      >
        {/* <Layout className="layout"> */ }
        <HashRouter>
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

            <Route path="/profile">
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

        </HashRouter>
        {/* </Layout> */ }
      </MyContext.Provider>
    </div>
  );
}

export default App;
