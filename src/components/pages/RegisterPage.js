import React, { useState, useContext, useEffect } from 'react';
import SubmitButton from '../buttons/SubmitButton.js';
import { Checkbox, Form, Message } from 'semantic-ui-react';
import { MyContext } from '../../App'
import { useHistory } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

/**
 * This is the Page for the Registration. A new Member can make a new Account. If you click the submitbutton user-Object will be added to UserData-Array with Objects
 * @returns 
 */
export default function RegisterPage() {
  console.log( "into RegisterPage" );

  const [name, setName] = useState( '' );
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [conditions, setConditions] = useState( { checked: false } );
  const history = useHistory( "/" );
  const { userData, setUserData, onRegister, user, setUser } = useContext( MyContext )


  console.log( "user in Registerpage", user );
  console.log( "userData in Registerpage", userData );


  useEffect( () => {
    console.log( "into useEffects" );


    console.log( "after useEffects userData", userData );
  }, [] )

  console.log( "history", history );


  const onSubmitHandler = () => {
    console.log( "into onSubmitHandler" );
    setUser( ( oldUser ) => {
      const newUser = {
        ...user,
        name: name,
        email: email,
        password: password,
        conditions: conditions.checked,
      };
      const updatedUser = { ...oldUser, ...newUser };
      console.log( "USER onSubmitHandler updatedUser", updatedUser );

      history.push( "/login" );
      return updatedUser
    }
    );
    console.log( "after onSubmitHandler user", user );


    setUserData(
      ( oldUserData ) => {
        console.log( "oldUserData", oldUserData );
        const newUser = {
          ...user,
          name: name,
          email: email,
          password: password,
          conditions: conditions.checked,
        };
        console.log( "newUser", newUser );
        oldUserData.unshift( newUser );
        console.log( "USERDATA onSubmitHandler updatedUser", oldUserData );
        return oldUserData
      }

    )

    console.log( "after onSubmitHandler userData", userData );

  };




  const errorHandling = ( errorcode ) => {
    return (
      errorcode == "" ? {
        content: 'Enter something',
        pointing: 'above',
      } : false
    )
  }




  return (
    <div className="containercenter">

      <h1>Make a new Account</h1>

      <Form error onSubmit={ () => onSubmitHandler() }>


        <Form.Input required
          label="Name"
          type="text"
          name="name"
          value={ name }
          // error={ errorHandling( name ) }
          onChange={ e => setName( e.target.value ) }
        />

        {/* 
        <Form.Input required
          label="Email"
          type="email"
          name="email"
          value={ email }
          // error={ errorHandling( email ) }
          onChange={ e => setEmail( e.target.value ) }
        /> */}


        <Form.Input required
          label="Password"
          type="password"
          name="password"
          value={ password }
          // error={ errorHandling( email ) }
          onChange={ e => setPassword( e.target.value ) }
        />

        <Form.Field required>
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            onChange={ () => setConditions( { checked: !conditions.checked } ) }
            checked={ conditions.checked }
            error={ conditions.checked == "false" ? {
              content: 'You have to agree our Terms and Conditions',
              pointing: 'above',
            } : false }
          />

        </Form.Field>



        { onRegister ? <SubmitButton text={ 'Thank you for your Registration' } /> : <SubmitButton text={ 'Register now' } /> }

      </Form>
    </div>
  );
}