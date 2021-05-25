import React, { useState } from 'react'

import { MyContext } from '../../../App'
import ButtonPrimarySmall from '../../buttons/ButtonPrimarySmall'
import './ProfilePage.scss'

export default function ShowUserData( { profileData, pathId } ) {

    const { userData, currentUser } = React.useContext( MyContext )

    return (
        <div >
            <h3>City: { profileData.address.city }</h3>
            <p>Tags: { profileData.tags }</p>
        </div>
    )
}
