import React, { useContext } from 'react'
import { MyContext } from '../../../App'
import ProfileCard from './ProfileCard'


export default function ProfileContainer() {

    const { userData } = useContext( MyContext )
    // console.log( userData );
    let profileCards = userData.map( ( data ) => {
        // console.log( "user", user );
        const allCards = [];
        // console.log( "DATA FÜR CARD", data );
        const newCard = <ProfileCard profileInfos={ data } />;
        allCards.push( newCard );

        return ( allCards )

    } )
    // console.log( "profileCards", profileCards );

    return (
        <div>
            <p>We found { profileCards.length } Profiles</p>

            { profileCards }

        </div>
    )
}
