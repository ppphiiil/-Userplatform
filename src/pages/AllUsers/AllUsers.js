import React from 'react'
import ProfileContainer from './ProfileContainer'
import './AllUsers.scss'

export default function AllUsers () {
  console.log('in AllUsers ')

  // {
  //   name: "Location 1",
  //     location: {
  //     lat: 41.3954,
  //       lng: 2.162
  //   },
  // }

  return (
    <div className=' allUsers'>
      <div className='profileContainer'>
        <ProfileContainer />
      </div>
      {/* <div className="map"><Map /></div> */}
    </div>
  )
}
