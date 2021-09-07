import React, { useState, useContext } from 'react';
import SubmitButton from '../components/buttons/SubmitButton.js';
import { Form } from 'semantic-ui-react';
import { MyContext } from '../App'
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


/**
 * This is the Page for the Registration. A new Member can make a new Account. If you click the submitbutton user-Object will be added to UserData-Array with Objects
 * @returns 
 */
export default function RegisterPage() {
  console.log( "enter RegisterPage" );

  const [name, setName] = useState( '' );
  const [email] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [conditions, setConditions] = useState( { checked: false } );
  const history = useHistory( "/" );
  const { userData, setUserData, onRegister } = useContext( MyContext )


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

  console.log( "userData in Registerpage", userData );
  console.log( "history", history );


  const onSubmitHandler = () => {
    console.log( "enter onSubmitHandler" );
    //     setUser( ( oldUser ) => {
    //       const newUser = {
    //         ...user,
    //         id: uuid(),
    //         name: name,
    //         email: email,
    //         password: password,
    //         conditions: conditions.checked,
    //       };
    //       const updatedUser = { ...oldUser, ...newUser };
    //       console.log( "USER onSubmitHandler updatedUser", updatedUser );
    // 
    //      
    //       return updatedUser
    //     }
    //     );
    //     console.log( "after onSubmitHandler user", user );


    setUserData(
      ( oldUserData ) => {
        console.log( "oldUserData", oldUserData );
        const newUser = {
          ...initialUser,
          id: uuid(),
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
    history.push( "/login" );
    console.log( "after onSubmitHandler userData", userData );

  };




  // const errorHandling = ( errorcode ) => {
  //   return (
  //     errorcode == "" ? {
  //       content: 'Enter something',
  //       pointing: 'above',
  //     } : false
  //   )
  // }




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
          autoComplete="on"
          value={ password }
          // error={ errorHandling( email ) }
          onChange={ e => setPassword( e.target.value ) }
        />

        <Form.Field required>
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            onChange={ () => setConditions( { checked: !conditions.checked } ) }
            checked={ conditions.checked }
            error={ conditions.checked === "false" ? {
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
