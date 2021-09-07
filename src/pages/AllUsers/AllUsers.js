import React,{useContext} from 'react'
import ProfileContainer from './ProfileContainer'
import './AllUsers.scss'
import { MyContext } from '../../App'

export default function AllUsers () {
  const { userData } = useContext(MyContext)

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
        <ProfileContainer userData={userData}/>
      </div>
      {/* <div className="map"><Map /></div> */}
    </div>
  )
}
