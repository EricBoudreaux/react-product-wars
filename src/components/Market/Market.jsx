import React, { useState, useEffect } from 'react'
import Product from './Product'

import FinalizeTransaction from './FinalizeTransaction'


const Market = ({ price, stock }) => {



  // Buying Formula

  //total = product1 * product1Price + product2 * product2Price + product3 * product3Price
let [total, setTotal] = useState(0)

const sendTotal = (productNum,total) => {
  setTotal(total);

}


  return (
    <div className='border-4 border-white bg-gray-400/20 rounded-md mx-5 text-white   flex flex-col'>
    <div className='mx-6 mt-2  h-8'>
    <div className='text-white grid grid-cols-4 text-start font-bold'>
      <p className='text-start'>Name</p>
      <p className='text-start self-end'>Price</p>
      <p className='text-start self-end'>Stock</p>

    </div>
    </div>

    
        <Product productNum={0} sendTotal={sendTotal} />
        <Product productNum={1} sendTotal={sendTotal} />
        <Product productNum={2} sendTotal={sendTotal} />

        <FinalizeTransaction total={total}/>

        {/* <button className="m-4 bg-white text-black hover:bg-black hover:text-white hover:border-black duration-200 ease-in">Leave</button> */}

    </div>
  )
}

export default Market
