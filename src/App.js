import React from 'react';


import Navigation from './components/navigation/Navigation';



import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AllUsers from './components/pages/AllUsers';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './index.scss'
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

//Layout with antd
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



function App() {
  return (
    <div>
      <Layout>
        <HashRouter>

          <Navigation />
          <Content className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/allusers">
                <AllUsers />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>


            </Switch>
          </Content>


        </HashRouter>

      </Layout>
    </div>
  );
}

export default App;
