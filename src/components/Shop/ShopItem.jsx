import React from 'react'
import ShopData from '../data/ShopItems.json'

const ShopItem = ({ shopNum }) => {

 

  return (
    <div className='mx-6 mt-4 border-b border-dashed h-12 my-'>
    <div className='text-white grid grid-cols-3 md:grid-cols-4 text-start items-center'>
      <p className='text-start self-end'>{ShopData[shopNum].name}</p>
      <p className='text-center md:text-start self-end'>{ShopData[shopNum].price}</p>
      <p className='text-start self-end hidden md:block'>{ShopData[shopNum].disc}</p>

      <div className='flex items-center justify-end ml-4'>

      <button className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-red-800 hover:border-red-800 ease-in duration-300'>Buy</button>
      </div>
    </div>
    </div>
  )
}

export default ShopItem
