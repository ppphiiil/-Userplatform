import React, { useContext } from 'react'
import { MyContext } from '../../../App'
import ProfileCard from './ProfileCard'


export default function ProfileContainer() {

    const { userData } = useContext( MyContext )
    let profileCards = userData.map( ( data ) => {
        const allCards = [];
        const newCard = <ProfileCard profileInfos={ data } />;
        allCards.push( newCard );
        return ( allCards )

    } )

    return (
        <div>
            <p>We found { profileCards.length } Profiles</p>
            { profileCards }
        </div>
    )
}
