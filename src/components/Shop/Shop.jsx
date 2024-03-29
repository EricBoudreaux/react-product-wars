import React from 'react'
import ShopItem from './ShopItem'


const Shop = () => {
  return (
    <div className='border-4 border-white bg-gray-400/20 rounded-md mx-5 text-white   flex flex-col'>
    <div className='mx-6 mt-0  h-8'>
    <div className='text-white grid grid-cols-3 md:grid-cols-4 text-start font-bold'>
      <p className='text-start self-end'>Name</p>
      <p className='text-center md:text-start'>Price</p>
      <p className='text-start self-end hidden md:block'>Description</p>
    </div>
    </div>
        <ShopItem shopNum={0} />
        <ShopItem shopNum={1} />
        <ShopItem shopNum={2} />
        <ShopItem shopNum={3} />

        {/* <button className="m-4 bg-white text-black hover:bg-black hover:text-white hover:border-black duration-200 ease-in">Leave</button> */}

    </div>
  )
}

export default Shop
