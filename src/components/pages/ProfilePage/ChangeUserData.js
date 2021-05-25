import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../../../App'
import SubmitButton from '../../buttons/SubmitButton';
import { Form } from 'semantic-ui-react';

export default function ChangeUserData( { profileData } ) {

    const { userData, setUserData, currentUser, setCurrentUser, editState, setEditState } = useContext( MyContext );
    const [name, setName] = useState( "" );
    const [city, setCity] = useState( "" );


    useEffect( () => {
        setCity( profileData.address.city );
        setName( profileData.name );
    }, [] );

    const changeData = () => {
        console.log( { city: city, name: name } );

        setCurrentUser( ( oldData ) => {
            const newData = {
                ...currentUser,
                address: { city: city }, name: name
            }
            const updatedData = { ...oldData, ...newData };

            return updatedData;
        }
        )
        let newIndex = null;
        userData.map( ( user, index ) => {


            if ( user.id === currentUser.id ) {
                newIndex = index;


            }

        } )


        setUserData( ( oldData ) => {
            const newAddress = { ...currentUser.address, city: city };
            const newData = {
                ...currentUser,
                name: name, address: newAddress,
            }
            console.log( "position", newIndex );
            console.log( "newData", newData );
            oldData[newIndex] = newData;
            const upDatedData = oldData;

            console.log( "upDatedData", upDatedData );
            console.log( "oldData", oldData );
            console.log( "userdata", userData );

            return oldData;
        }


        );

        setEditState( false )



        // setUser( ( oldUser ) => {
        //   const newUser = {
        //     ...user,
        //     name: name,
        //     password: password,
        //   };
        //   const updatedUser = { ...oldUser, ...newUser };
        //   return [updatedUser]
        // } )



    }

    return (
        <div>
            <div >
                <Form error style={ { width: "100%" } } onSubmit={ changeData }>
                    <p>City:  <Form.Input required

                        type="text"
                        name="city"
                        style={ { width: "200px" } }
                        value={ city }

                        // error={ errorHandling( name ) }
                        onChange={ e => setCity( e.target.value ) }
                    />
                    </p>
                    <p>name: <Form.Input required

                        type="text"
                        name="Name"
                        style={ { width: "200px" } }
                        value={ name }

                        // error={ errorHandling( name ) }
                        onChange={ e => setName( e.target.value ) }
                    /></p>
                    <SubmitButton text="Save" />
                </Form>
            </div>





        </div>


    )
}
