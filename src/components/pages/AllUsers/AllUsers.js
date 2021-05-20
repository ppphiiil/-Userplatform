import React, { useContext } from 'react';
import ProfileContainer from './ProfileContainer';
import Map from './Map';
import './AllUsers.css';
import { MyContext } from '../../../App'



export default function AllUsers() {

  const { userData } = useContext( MyContext )

  return (
    <div className="container allUsers">
      <div className="profileContainer"><ProfileContainer /></div>
      <div className="map"><Map /></div>

    </div>
  );
}
