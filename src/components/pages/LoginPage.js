import React, { useState, useContext } from 'react';
import SubmitButton from '../buttons/SubmitButton.js';
import { Form, Message } from 'semantic-ui-react';
import { MyContext } from '../../App'




export default function LoginPage() {
  console.log( "enter LoginPage" );
  const [name, setName] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [message, setMessage] = useState( '' );
  const { setIsLogin, userData, setCurrentUser } = useContext( MyContext )

  console.log( "userData in LoginPage", userData );


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
          // error={ errorHandling( email ) }
          onChange={ e => setPassword( e.target.value ) }
        />


        <SubmitButton text={ 'Login now' } />
        { message ? <Message
          error
          header='Error'
          content={ message }
        /> : "" }


      </Form>
    </div>
  );

}
