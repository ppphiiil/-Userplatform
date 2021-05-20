import React, { useContext } from 'react'
import { MyContext } from '../../../App'
import ProfileCard from './ProfileCard'


export default function ProfileContainer() {

    const { userData } = useContext( MyContext )
    console.log( userData );
    let profileCards = userData.map( ( user, index ) => {
        console.log( "user", user );
        const allCards = [];
        const newCard = <ProfileCard profileInfos={ user } />;
        allCards.push( newCard );

        return ( allCards )

    } )
    console.log( "profileCards", profileCards );

    return (
        <div>
            <p>We found { profileCards.length } Profiles</p>

            { profileCards }

        </div>
    )
}
