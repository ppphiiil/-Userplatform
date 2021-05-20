import React, { useState, useContext } from 'react';
import SubmitButton from '../buttons/SubmitButton.js';
import { Checkbox, Form, Message } from 'semantic-ui-react';
import { MyContext } from '../../App'




export default function LoginPage() {
  console.log( "into LoginPage" );
  const [name, setName] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [message, setMessage] = useState( '' );

  const { setIsLogin, userData, currentUser, setCurrentUser, user, setUser } = useContext( MyContext )

  console.log( "in LoginPage", userData );


  const checkLogin = ( e ) => {
    e.preventDefault()
    console.log( "name, password", name, password );
    setUser( ( oldUser ) => {
      const newUser = {
        ...user,
        name: name,
        password: password,
      };
      const updatedUser = { ...oldUser, ...newUser };
      return [updatedUser]
    } )



    console.log( "USERDATA in chekLogin", userData );



    let findUser = userData.filter( ( data ) => {
      console.log( data )
      return ( data.name === name && data.password === password )
    } )


    console.log( "FIND USER", findUser )
    setMessage( "" )
    if ( findUser.length == 1 ) {

      setIsLogin( true );
      findUser = [];
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
