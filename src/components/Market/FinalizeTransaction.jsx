import React, { useState, useEffect } from 'react'

const FinalizeTransaction = ({ total }) => {

  

const [final, setFinal] = useState(0)

useEffect(() => {
  setFinal(total)

},[total]);

console.log(total)


  return (
    <div>
      <div className='flex justify-end items-center mt-4'>
      {/* <div className='flex items-center'>
      <h3 className='text-2xl font-bold pl-6'>Total</h3>
      <p className='ml-8'>{final}</p>
      </div> */}
      <button className='text-sm px-2 py-1 mb-2 mr-7 bg-white text-black hover:bg-green-800 hover:border-green-800 ease-in duration-300'>Purchase</button>
      </div>
   
    </div>
  )
}

export default FinalizeTransaction