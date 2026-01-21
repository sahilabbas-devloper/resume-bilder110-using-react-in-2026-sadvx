import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>

     <div className='w-full h-14 p-4 pb-2 flex  justify-start bg-white  shadow-lg fixed'>
    <img
     className='mix-blend-darken w-full max-w-10   h-auto object-cover'
    src="https://static.vecteezy.com/system/resources/previews/028/561/891/non_2x/resume-dual-tone-icon-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg" alt="" />
    <h1 className='text-xl font-semibold '> ResumeGen </h1>
    
    <Link to={"/Hero"} className='ml-24 text-md md:ml-200 text-gray-800 font-semibold hover:text-purple-800'>Hero</Link>
    <Link to={"/Resume"} className='ml-4 text-md text-gray-800 font-semibold hover:text-purple-800'>preview</Link>
    </div>


        </div>
    </div>
  )
}

export default Header