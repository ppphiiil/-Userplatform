import React, { useContext } from 'react';
import ProfileContainer from './ProfileContainer';
import Map from './Map';
import './AllUsers.scss';
import { MyContext } from '../../../App'



export default function AllUsers() {
  console.log( "in AllUsers " );

  const { } = useContext( MyContext )

  // {
  //   name: "Location 1",
  //     location: {
  //     lat: 41.3954,
  //       lng: 2.162
  //   },
  // }

  return (
    <div className=" allUsers">
      <div className="profileContainer"><ProfileContainer /></div>
      <div className="map"><Map /></div>
    </div>
  );
}
