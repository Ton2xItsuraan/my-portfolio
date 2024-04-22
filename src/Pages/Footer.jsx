import React from 'react'
import SocialMediaIcons from '../Components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-64 bg-deep-blue pt-10'>
        <div className='w-5/6 mx-auto'>
            <SocialMediaIcons />
            <div className='md:flex justify-center md:justify-between text-center'>
                <p className='font-playfair font-semibold text-2xl text-yellow'>Antoine Ludel Villanueva</p>
                <p className='font-playfair text-md text-yellow'>©2024 VILLANUEVA. All rights reserved</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
