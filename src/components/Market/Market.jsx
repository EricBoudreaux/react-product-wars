import React from 'react'
import Product from './Product'


const Market = () => {
  return (
    <div className='border-4 border-white bg-gray-400/20 rounded-md mx-5 text-white   flex flex-col'>
    <div className='mx-6 mt-4  h-8'>
    <div className='text-white grid grid-cols-4 text-start font-bold'>
      <p className='text-start'>Name</p>
      <p className='text-start self-end'>Price</p>
      <p className='text-start self-end'>Stock</p>
    </div>
    </div>
        <Product productNum={0} />
        <Product productNum={1} />
        <Product productNum={2} />

        {/* <button className="m-4 bg-white text-black hover:bg-black hover:text-white hover:border-black duration-200 ease-in">Leave</button> */}

    </div>
  )
}

export default Market
