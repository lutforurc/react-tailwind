import React from 'react'
import HeroImage from '../../assets/1.png'

function Hero() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* text content section */}
          <div className='space-y-5 py-20 px-10 md:py-0 md:px-0 md:pr-16 flex flex-col justify-center text-center items-center md:text-left md:items-start'>
            <h1 className='text-4xl xl:text-5xl font-bold'>Unlock a Passion, Side Hustle, or New{" "}
              <span className='text-gray-500 underline '>Profession</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab accusantium quaerat eum veniam tempora quos totam architecto in dignissimos</p>
             <button className='primary-btn bg-gray-900 hover:bg-primary hover:text-white duration-300'>More News</button>
          </div>
          {/* Hero Image Section */}
          <div className='flex justify-center items-center'>
            <img className='w-[80%] md:w-[500px] xl:w-[600px]' src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero