import React, { useState, useContext } from 'react';
import SubmitButton from '../buttons/SubmitButton.js';
import { Checkbox, Form, Message } from 'semantic-ui-react';
import { MyContext } from '../../App'




export default function LoginPage() {
  console.log( "into LoginPage" );
  const [name, setName] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [message, setMessage] = useState( '' );
  const [user, setUser] = useState( [{
    name: name,
    password: password,
  }] );
  const { setIsLogin, userData } = useContext( MyContext )

  console.log( "in LoginPage", userData );


  const checkLogin = ( e ) => {
    e.preventDefault()
    setUser( [{
      name: name,
      password: password,
    }] );
    console.log( "userData in chekLogin", userData );

    if ( user.name === userData.name && user.password === userData.password ) {
      setIsLogin( true );
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
