import React, { useState } from 'react'

import { GiLightBackpack } from 'react-icons/gi'

import { IoMdClose } from 'react-icons/io'


const Bag = () => {

const [showBag, setShowBag] = useState(false)



  return (
    <div className=''>

    {showBag 
    ? (
        <IoMdClose onClick={() => setShowBag(!showBag)} className='text-white fixed left-12 top-12 m-2 bg-red-600 w-12 h-12 p-2 rounded-full z-40 cursor-pointer hover:shadow-xl hover:scale-110 ' size={30} />
    )
    : (
        <GiLightBackpack onClick={() => setShowBag(!showBag)} className='text-white fixed left-12 top-12 m-2 bg-red-600 w-12 h-12 p-2 rounded-full z-40 cursor-pointer hover:shadow-xl hover:scale-110 ' size={30} />
    )
    }



        <div className={ showBag ? 'w-full bg-white h-screen fixed left-0 ease-in duration-200 z-30': 'w-full bg-white h-screen fixed left-[-100%] ease-in duration-200 z-30'}>
          <div className='h-full flex justify-center items-center'>
          <h1 className='text-5xl'>Inventory</h1>
          </div>
        </div>
        
        


    </div>
  )
}

export default Bag
