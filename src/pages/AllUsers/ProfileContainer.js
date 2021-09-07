import React from 'react'
import ProfileCard from './ProfileCard'


export default function ProfileContainer({userData}) {

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
