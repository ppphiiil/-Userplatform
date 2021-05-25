import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom'
import { MyContext } from '../../../App'
import ButtonPrimarySmall from '../../buttons/ButtonPrimarySmall';
import ChangeUserData from './ChangeUserData';
import './ProfilePage.scss'
import ShowUserData from './ShowUserData'





export default function ProfilePage() {
  console.log( "enter Profilepage" );

  const { userData, currentUser, editState, setEditState } = React.useContext( MyContext )

  let { pathId } = useParams();
  console.log( "id in ProfilePage", pathId );

  const getProfileById = userData.filter( ( user ) => {


    if ( user.id === pathId ) {
      return user;
    }
    return undefined;
  } )

  const profileData = getProfileById[0]
  //console.log( profileData.name );


  const onChangeHandler = () => {
    setEditState( !editState );
    console.log( editState );
  }

  return (
    <div>
      <NavLink to={ "/allusers" } ><ButtonPrimarySmall text="<- back" /></NavLink>

      <h1 className="edit-container"> { profileData.name }</h1>
      <div style={ { display: "flex" } }>

        <img src={ profileData.userimage } alt={ profileData.name } />
        <div className="user-infos">
          { pathId === currentUser.id ? <div className="edit" onClick={ onChangeHandler }> <ButtonPrimarySmall
            text="Edit" /></div> : null }


          { !editState ? <ShowUserData profileData={ profileData } pathId={ pathId } /> : <ChangeUserData profileData={ profileData } /> }</div>




      </div>

      <h2>Portfolio</h2>
      <div className="portfolio-profile">
        { profileData.portfolio.portfolioimage1 ? <img className="portfolio-img" src={ profileData.portfolio.portfolioimage1 } alt="img" /> : <div className=" placeholder-img" >no image</div> }
        { profileData.portfolio.portfolioimage2 ? <img className="portfolio-img" src={ profileData.portfolio.portfolioimage2 } alt="img" /> : <div className=" placeholder-img" >no image</div> }{ profileData.portfolio.portfolioimage3 ? <img className="portfolio-img" src={ profileData.portfolio.portfolioimage3 } alt="img" /> : <div className=" placeholder-img" >no image</div> }
      </div>


    </div >
  );
}
