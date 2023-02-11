import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'animate.css';


const StartScreen = () => {



  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-5xl text-white z-20'>Product Wars</h2>
      <h4 className='text-2xl text-white z-20'>Deal or die</h4>
      <Link to='/difficulty' className='mt-12 z-20 animate__animated animate__pulse animate__slow  hover:bg-white  duration-300 ease-in'><button className='hover:text-black ease-in duration-300'>Start</button></Link>
      
    </div>
  )
}

export default StartScreen
