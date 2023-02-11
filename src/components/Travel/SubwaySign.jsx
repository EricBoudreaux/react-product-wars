import React from 'react'
import { Link } from 'react-router-dom'

const SubwaySign = ({ name, c1, c2, c3, c4, travel, destination }) => {

let travelTo = '/' + destination;

  return (
        <div className='group cursor-pointer bg-[var(--dark)] my-4 z-20 pt-4 w-52 h-24 shadow-lg hover:scale-105 ease-in duration-300'>
        <Link to={travelTo}>

            <h1 className='text-white text-3xl border-t pt-2 pl-2'>{name}</h1>
            <div className={`bg-green-600 w-5 h-5 rounded-full mt-2 inline-block ml-2 mx-1`}
            ></div>
            <div className={`bg-red-600 w-5 h-5 rounded-full mt-2 inline-block mx-1`}
            ></div>
            <div className={`bg-yellow-600 w-5 h-5 rounded-full mt-2 inline-block mx-1`}
            ></div>
            <div className={`bg-gray-600 w-5 h-5 rounded-full mt-2 inline-block mx-1`}
            ></div>
            {travel ? (<div className='opacity-0 mt-5 group-hover:opacity-100 bg-black/80 group-hover:mt-2 ease-in duration-300 mx-auto bg-white text-center text-black'>Travel</div>)
            : null }
        </Link>

        </div>

  )
}

export default SubwaySign
