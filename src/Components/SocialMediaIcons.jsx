import React from 'react'
import LinkedIn from "../assets/linkedin.png"
import FaceBook from "../assets/facebook.png"
import Twitter from "../assets/twitter.png"
import Instagram from "../assets/instagram.png"
import GitHub from "../assets/github.png"

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a href="https://www.linkedIn.com" className='hover:opacity-50 transition duration-500'
      target='_blank'
      rel='noreferrer'>
        <img src={LinkedIn} alt="linkedin-link" />
      </a>
      <a href="https://www.twitter.com" className='hover:opacity-50 transition duration-500'
      target='_blank'
      rel='noreferrer'>
        <img src={Twitter} alt="linkedin-link" />
      </a>
      <a href="https://www.facebook.com" className='hover:opacity-50 transition duration-500'
      target='_blank'
      rel='noreferrer'>
        <img src={FaceBook} alt="linkedin-link" />
      </a>
      <a href="https://www.instagram.com" className='hover:opacity-50 transition duration-500'
      target='_blank'
      rel='noreferrer'>
        <img src={Instagram} alt="linkedin-link" />
      </a>
      <a href="https://www.github.com" className='hover:opacity-50 transition duration-500'
      target='_blank'
      rel='noreferrer'>
        <img src={GitHub} alt="linkedin-link"  />
      </a>
      
    </div>
  )
}

export default SocialMediaIcons
