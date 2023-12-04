import React, { useState } from 'react'
import SubwaySign from './SubwaySign'

import Map from './nye_map.png'

import { IoIosSubway, IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Subway = () => {

  const [showMap, setShowMap] = useState(false);

  const handleMap = () => {setShowMap(!showMap)}



  return (
    <div className='w-full'>
          
        {showMap 
         ? ( <IoMdClose onClick={() => setShowMap(!showMap)} className='text-white fixed right-12 top-12 m-2 bg-red-600 w-12 h-12 p-2 rounded-full z-40 cursor-pointer hover:shadow-xl hover:scale-110' size={30}/>)

         : ( <IoIosSubway onClick={() => setShowMap(!showMap)} className='text-white fixed right-12 top-12 m-2 bg-red-600 w-12 h-12 p-2 rounded-full z-50 cursor-pointer hover:shadow-xl hover:scale-110' size={30}/>      )
}

    <div className={showMap 
                    ? 'fixed  w-full h-screen top-0 bg-black/80 right-0 ease-in duration-200 z-30'
                    : 'fixed  w-full h-screen top-0 bg-black/80 right-[-100%] ease-in duration-200 z-30'
                    }>


   


    <div className='flex flex-col items-center'>
    <div className='grid grid-cols-2 gap-5 justify-center pt-32 lg:pl-24'>
      <h1 className='text-2xl border-4 border-black bg-yellow-400 flex justify-center items-center z-50 my-4 w-52 h-24 text-center'>Subway Ticket<br /> $5</h1>
      <SubwaySign name={'Brooklyn'} destination={'brooklyn'} c1={'red'} c2={'green'} c3={'green'} c4={'gray'} travel={true} />
      <SubwaySign name={'The Bronx'} destination={'bronx'} c1={'red'} c2={'gray'} c3={'yellow'} c4={'red'} travel={true} />
      <SubwaySign name={'Manhattan'} destination={'manhattan'} c1={'red'} c2={'blue'} c3={'blue'} c4={'red'} travel={true} />
      <SubwaySign name={'Queens'} destination={'queens'} c1={'green'} c2={'green'} c3={'green'} c4={'red'} travel={true} />
      <SubwaySign name={'Staten Island'} destination={'staten'} c1={'gray'} c2={'green'} c3={'gray'} c4={'red'} travel={true} />
      {/* <div className='hidden md:block bg-red-600 w-[100%] right-44 top-12 h-4 absolute rotate-90' /> */}
    </div>
    
    <img src={Map} className='absolute mx-auto h-screen lg:h-full object-none lg:object-cover w-full py-12' alt="map of nye" />
    



    </div>

    </div>
    </div>
  )
}

export default Subway




{/* <div className='relative w-full px-6 py-12 bg-gray-300  mt-[-85%] lg:mt-[-13%] hover:mt-0 ease-in duration-200'>
<div className='grid grid-cols-2 lg:flex flex-row justify-between'>
  <h1 className='md:hidden text-2xl border-4 border-black bg-yellow-400 flex justify-center items-center z-50 my-4 w-52 h-24'>Subway</h1>
  <SubwaySign name={'Brooklyn'} c1={'red'} c2={'green'} c3={'green'} c4={'gray'}/>
  <SubwaySign name={'The Bronx'} c1={'red'} c2={'gray'} c3={'yellow'} c4={'red'}/>
  <SubwaySign name={'Manhattan'} c1={'red'} c2={'blue'} c3={'blue'} c4={'red'}/>
  <SubwaySign name={'Queens'} c1={'green'} c2={'green'} c3={'green'} c4={'red'}/>
  <SubwaySign name={'Staten Island'} c1={'gray'} c2={'green'} c3={'gray'} c4={'red'}/>
    <div className='hidden md:block bg-red-600 w-[100%] left-0 top-28 h-4 absolute' />
    </div>
    <h1 className='text-center text-5xl mt-8'>Subway</h1>
    <img src={Map} className='mx-auto h-full' alt="map of nye" />
</div> */}