import React from 'react'
import {Link} from "react-router-dom"
import {Typewriter} from "react-simple-typewriter"
import heroimg from "../assets/hero.png"

function Hero() {
    return (
        <div>
            <section className='w-full min-h-screen bg-violet-100 max-w-full h-full flex flex-col  items-center'>

              <div className='w-full max-w-6xl flex flex-col md:flex-row gap-20'>

        <div className='w-full  flex  flex-col p-10   pt-35 '>
         <h1 className=' text-4xl font-semibold mb-1'>Build a Professional <br /> Resume in <span className=' mb-4 text-4xl text-purple-800 font-semibold '>
            <Typewriter words={[" just 2 Minutes.","just build your CV.","just make up grow."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1600}
         
         /></span></h1>
         <p className='text-gray-600 mt-2 mb-4'>ATS-friendly. Interview-getting templates Instant export to PDF.</p>
         <Link to={"/Home"} className=' w-35 h-10 text-[12px] rounded-sm shadow-lg text-white flex items-center justify-center mb-6 bg-purple-800'>CREATE MY RESUME</Link>

         <p> (*_*) Trusted by 60k++ users</p>
        </div>

<div   className='w-full  rounded-2xl hidden md:block overflow-hidden'>
    <img src={heroimg}
     className='w-full max-w-md h-auto object-cover'
    alt="hero" />
</div>

      </div>

      <p className='mt-10 text-sm'>Get hired at top Companies</p>
<div className=' max-w-full overflow-hidden  md:max-md:  flex justify-evenly items-center '>
    <img 
    className='mix-blend-darken w-full max-w-30   h-auto object-cover'
    src="https://media.licdn.com/dms/image/v2/D5610AQGSBiOzL80FwA/image-shrink_800/B56ZqVWQLzI4Ac-/0/1763442231914?e=2147483647&v=beta&t=mtDIjWITDQJRYCsCgNCLeMEAzHuX7Lh-W0Dn0llVmv8" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
    src="https://static.vecteezy.com/system/resources/thumbnails/021/514/726/small/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwVgT13iPSw0noeEF86-_pArXP2suISkZiA&s" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-20 mr-10 mt-4 h-auto object-cover'
    src="https://dhjhkxawhe8q4.cloudfront.net/thomasnelson-wp/wp-content/uploads/sites/5/2024/07/15154418/amazon-logo-black-transparent-1.png" alt="" />
</div>

      </section>
        </div>
    )
}

export default Hero