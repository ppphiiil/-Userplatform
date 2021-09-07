import React from 'react'
import './ProfilePage.scss'

export default function ShowUserData ({ profileData, pathId }) {
  return (
    <div>
      <h3>City: {profileData.address.city}</h3>
      <p>Tags: {profileData.tags}</p>
    </div>
  )
}
