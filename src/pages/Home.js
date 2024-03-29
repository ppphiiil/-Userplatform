import React, { useContext } from 'react'
import { MyContext } from '../App'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import ProfileContainerPreview from "./AllUsers/ProfileContainerPreview"
import './Home.scss'

export default function Home () {
  const { userData } = useContext(MyContext)

  return (
    <div className='home'>
      <div className='section container'>
        <div className='text-side'>
          <h1>
            <strong>{userData.length} Videographers </strong> produce your
            branded content videos in Berlin.
          </h1>
          <p className='text'>
            We'll give you exactly the videos that will get you ahead.
          </p>
          <ul className='listing'>
            <li className='list-item'>
              {' '}
              <i className='color-secondary list-item checkmark icon' />
              <span className='text'>
                <strong>No Stock! </strong>We produce for you.
              </span>
            </li>
            <li className='list-item'>
              {' '}
              <i className='color-secondary list-item checkmark icon' />
              <span className='text'>with / without product</span>
            </li>
            <li className='list-item'>
              {' '}
              <i className='color-secondary list-item checkmark icon' />
              <span className='text'>Low cost</span>
            </li>
          </ul>
          <div className="product-list">
          <h5>SimpleClips</h5>
          <h5>Interview-Videos</h5>
          <h5>Produkt-Videos</h5>
          </div>
        </div>

        <div className='media-side'>
          <iframe
            title='video'
            src='https://player.vimeo.com/video/434666096?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0'
            position='absolute'
            top='0'
            left='0'
            width='100%'
            height='100%'
            frameBorder='0'
            allow='autoplay'
            allowFullScreen
          ></iframe>
        </div>
      </div>
<div className="section">
     <h2>We found { userData.length } Videographer</h2>
          
           <ProfileContainerPreview userData={userData.filter((user,index)=>{
             return(index < 4)

           })}/>
           </div>

      <section className='section section-yellow'>
        <div className='width-500'>
          <h1>
            <strong>Our</strong> content packages
          </h1>
          <p className='text'>
            Choose a package and start immediately online with your first
            production OR arrange a first non-binding discussion with us.
          </p>
          <ButtonPrimary text='Arrange a consultation now' />
        </div>
      </section>
    </div>
  )
}
