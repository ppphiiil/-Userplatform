import React, { useState, useEffect,useContext } from 'react';
import SubmitButton from '../components/buttons/SubmitButton.js';
import { Form, Message } from 'semantic-ui-react';
import { MyContext } from '../App'
import { NavLink } from 'react-router-dom';



export default function LoginPage() {
  console.log( "enter LoginPage" );
  const [name, setName] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [message, setMessage] = useState( '' );
  const { setIsLogin, userData, setCurrentUser } = useContext( MyContext )

  console.log( "userData in LoginPage", userData );


useEffect(() => {
window.scroll({
  top: 0, 
  left: 0, 
  //behavior: 'smooth'
});
  
}, [])


  const checkLogin = ( e ) => {
    e.preventDefault()
    console.log( "name & password: ", name, password );
    // setUser( ( oldUser ) => {
    //   const newUser = {
    //     ...user,
    //     name: name,
    //     password: password,
    //   };
    //   const updatedUser = { ...oldUser, ...newUser };
    //   return [updatedUser]
    // } )



    console.log( "USERDATA in chekLogin", userData );



    let findUser = userData.filter( ( data ) => {
      console.log( data )
      return ( data.name === name && data.password === password )
    } )


    console.log( "FIND USER", findUser )
    setMessage( "" )
    if ( findUser.length === 1 ) {
      setCurrentUser( findUser[0] );
      setIsLogin( true );

      // console.log( "XXX", userData.filter( ( user ) => userData.name === user.name ) );
      // setCurrentUser( userData.filter( ( user ) => userData.name === user.name ) )
    } else {
      setMessage( "Username or Password is wrong, please try again" )
    }

  }

  return (
    <div className="containercenter">
      <h1>Login</h1>

      <Form error onSubmit={ checkLogin }>


        <Form.Input required
          label="Name"
          type="text"
          name="name"
          value={ name }
          // error={ errorHandling( name ) }
          onChange={ e => setName( e.target.value ) }
        />


        <Form.Input required
          label="Password"
          type="password"
          name="password"
          value={ password }
          autoComplete="on"
          // error={ errorHandling( email ) }
          onChange={ e => setPassword( e.target.value ) }
        />


        <SubmitButton text={ 'Login now' } />
        { message ? <Message
          error
          header='Error'
          content={ message }
        /> : "" }

        <p>You don´t have a profile yet?</p>
        <NavLink to="/register">Register</NavLink>


      </Form>
    </div>
  );

}
