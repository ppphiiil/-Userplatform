import React from 'react'
import './ProfileCard.scss'
import { NavLink } from 'react-router-dom'
import ButtonPrimarySmall from '../../buttons/ButtonPrimarySmall';



export default function ProfileCard( { profileInfos } ) {
    console.log( "enter ProfileCard" );

    return (
        <>
            <div className="profileCard">
                <div className="user-image-container">

                    { profileInfos.userimage ? <img className="user-image" src={ profileInfos.userimage } alt="img" /> : <div className="placeholder-profil-img" >no pic</div> }
                </div>
                <div className="user-info">
                    <div>
                        <h3>{ profileInfos.name }</h3>
                        <p>{ profileInfos.address.city }</p>
                        <div >{ profileInfos.tags.map( ( tag ) => <span className="tags">{ `${tag} ` }</span> ) }</div>
                    </div>
                    <NavLink to={ `/profile/${profileInfos.id}` }  ><ButtonPrimarySmall text="Profile" /></NavLink>
                </div>
                <div className="portfolio">
                    { profileInfos.portfolio.portfolioimage1 ? <img className="portfolio-img" src={ profileInfos.portfolio.portfolioimage1 } alt="img" /> : <div className=" placeholder-img" >no image</div> }
                    { profileInfos.portfolio.portfolioimage2 ? <img className="portfolio-img" src={ profileInfos.portfolio.portfolioimage2 } alt="img" /> : <div className=" placeholder-img" >no image</div> }{ profileInfos.portfolio.portfolioimage3 ? <img className="portfolio-img" src={ profileInfos.portfolio.portfolioimage3 } alt="img" /> : <div className=" placeholder-img" >no image</div> }
                </div>


            </div>
            <hr />
        </>
    )
}
