import React, { useState, useEffect } from 'react'
import ProductData from '../data/Products.json'



const Product = ({ productNum }) => {

  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')


  useEffect(() => {
    const priceMath = Math.ceil(Math.random() * (ProductData[productNum].high - ProductData[productNum].low) + ProductData[productNum].low);
    setPrice(priceMath);



    const stockMath = Math.ceil(Math.random() * (ProductData[productNum].stockHigh - ProductData[productNum].stockLow) + ProductData[productNum].stockLow);
    setStock(stockMath);

}, []);


  

  return (
    <div className='mx-6 mt-4 border-b border-dashed h-12'>
    <div className='text-white grid grid-cols-4 text-start items-center'>
      <p className='text-start self-end'>{ProductData[productNum].name}</p>
      <p className='text-start self-end'>{price}</p>
      <p className='text-start self-end'>{stock}</p>


      <div className='flex items-center justify-end ml-4'>
      <button className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-green-800 hover:border-green-800 ease-in duration-300'>Sell</button>
      <button className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-red-800 hover:border-red-800 ease-in duration-300'>Buy</button>
      </div>
    </div>
    </div>
  )
}

export default Product
