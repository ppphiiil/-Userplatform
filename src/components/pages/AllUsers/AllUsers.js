import React, { useContext } from 'react';
import ProfileContainer from './ProfileContainer';
import Map from './Map';
import './AllUsers.css';
import { MyContext } from '../../../App'



export default function AllUsers() {
  console.log( "in AllUsers " );

  const { userData } = useContext( MyContext )
  const userLocations = userData.map( ( item ) => {
    return ( {
      name: item.name,
      location: {
        lat: Number( item.address.geo.lat ),
        lng: Number( item.address.geo.lng ),
      }
    }
    )



    // {
    //   name: "Location 1",
    //     location: {
    //     lat: 41.3954,
    //       lng: 2.162
    //   },
    // }

  } )

  console.log( userLocations );

  return (
    <div className=" allUsers">
      <div className="profileContainer"><ProfileContainer /></div>
      <div className="map"><Map userLocations={ userLocations } /></div>

    </div>
  );
}
