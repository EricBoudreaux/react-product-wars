import React from 'react'
import { Link } from 'react-router-dom'

import 'animate.css';


const Difficulty = () => {
  return (
    <Link to='/brooklyn'>
    <div  className='text-white text-4xl h-screen'>
      <div className='w-full flex flex-col justify-center text-center h-full px-8'>
        <h2 className='text-5xl text-white z-20'>The Word..</h2>
        <p className='text-2xl font-thin mt-4'>Three days ago your car broke down</p>
        <p className='text-2xl font-thin'>Two days ago you lost your job</p>
        <p className='text-2xl font-thin'>Yesterday your brother went jail on some trumped up charges</p>
        <p className='text-2xl font-extrabold mt-4'>Hit the streets and push some product</p>

        <p className='font-bold text-sm mt-12 animate__animated animate__pulse animate__slow'>Click anywhere to continue</p>
      </div>
    </div>
    </Link>
  )
}

export default Difficulty
