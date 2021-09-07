import React from 'react'
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import ProfileCard from './ProfileCard'
import { NavLink} from 'react-router-dom';


export default function ProfileContainerPreview({userData}) {

    let profileCards = userData.map( ( data ) => {
        const allCards = [];
        const newCard = <ProfileCard profileInfos={ data } />;
        allCards.push( newCard );
        return ( allCards )

    } )

    return (
        <div>
           
            { profileCards }
            <div style={{textAlign:"center"}}>
             <NavLink to={"/login"}>
            <ButtonPrimary text="See all Videographers"/>
            </NavLink>
            </div>
        </div>
    )
}
