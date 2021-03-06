import React from 'react'
import InstagramLogo from 'components/home/instagram-logo'

export default function HomePageInfo () {
  return (
    <div className='home'>
      <div className='quote'>
        <span>
                  Not a club, nor a gang. Just a group of drunks with a passion for bikes!
        </span>
      </div>
      <div className='instagram'>
        <a href='https://www.instagram.com/fistasthlm' target='_blank'>
          <InstagramLogo />
        </a>
      </div>
      <div className='home'>
        <span>Check out our bikes or buy our shit!</span>
      </div>
    </div>
  )
}
