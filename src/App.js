import React, { createContext, useState, useEffect } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

//PAGES
import Navigation from './components/navigation/Navigation';
import Home from './components/pages/Home';
import AllUsers from './components/pages/AllUsers';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './index.scss'
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import RegisterSuccessful from './components/pages/RegisterSuccessful';

//LAYOUT ANDT
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

//CONTEXT
export const MyContext = createContext( null );


//TESTDATA
const testUser = [{
  name: "phil",
  password: "123"
}, {
  name: "Flo",
  password: "111"
}]




function App() {
  console.log( "into App" );
  const [isLogin, setIsLogin] = useState( false )
  const [registered, setRegistered] = useState( false )
  const [userData, setUserData] = useState( testUser )
  const [onRegister, setOnRegister] = useState( false )
  const [user, setUser] = useState( {} );
  console.log( "userData in App", userData );







  return (
    <div>
      <MyContext.Provider value={ { isLogin, setIsLogin, userData, setUserData, registered, setRegistered, onRegister, setOnRegister, user, setUser } }>
        <Layout>
          <HashRouter>
            <Navigation />
            <Content className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/allusers">
                  user anzeigen noch machen
              </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/registerSuccessful">
                  <RegisterSuccessful />
                </Route>
                <Route path="/login">
                  { isLogin || registered ? <AllUsers /> : <LoginPage /> }
                </Route>
                <Route path="/register">
                  { ( isLogin ? <AllUsers /> : <RegisterPage /> ) }
                </Route>

              </Switch>
            </Content>
          </HashRouter>
        </Layout>
      </MyContext.Provider>
    </div>
  );
}

export default App;
