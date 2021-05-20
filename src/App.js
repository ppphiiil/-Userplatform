import React, { createContext, useState, useEffect } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

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
const testUser = [

  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Foto", "Manager", "Foto"],
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Video", "Production", "Foto"],
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Video", "Production", "Foto"],
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {

      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "userimage": "https://mir-s3-cdn-cf.behance.net/user/230/39995d953707.586c9b92af18b.jpeg",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "userimage": "",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "portfolio": {
      "portfolioimage1": "https://mir-s3-cdn-cf.behance.net/projects/202/c4628b118824099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
      "portfolioimage2": "https://mir-s3-cdn-cf.behance.net/projects/202/94ba2c10764361.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
      "portfolioimage3": "https://mir-s3-cdn-cf.behance.net/projects/202/fefd5289498973.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    },
    "tags": ["Camera", "Love", "Foto"],
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }

];

const initialUser = {
  "id": "",
  "name": "",
  "username": "",
  "email": "",
  "userimage": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "",
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
  console.log( 'into App' );
  const [isLogin, setIsLogin] = useState( false );
  const [registered, setRegistered] = useState( false );
  const [userData, setUserData] = useState( testUser );
  const [onRegister, setOnRegister] = useState( false );
  const [user, setUser] = useState( initialUser );

  console.log( 'userData in App', userData );

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

        } }
      >
        <Layout className="layout">
          <HashRouter>
            <Navigation />
            <Content className="content">
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
            </Content>
          </HashRouter>
        </Layout>
      </MyContext.Provider>
    </div>
  );
}

export default App;
