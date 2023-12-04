import React, { useState, useEffect } from 'react'

import Market from './Market'

import ProductData from '../data/Products.json'


const Product = ({ productNum, sendTotal }) => {


  let [transactionNum, setTransactionNum] = useState(0);

  const buy = () => {
    setTransactionNum(transactionNum + 1)
    setStock(stock - 1)


    if(stock === 0){
      setStock(stock)
      setTransactionNum(transactionNum)
    }
  }

  const sell = () => {
    setTransactionNum(transactionNum - 1)
    setStock(stock + 1)

    if(transactionNum === 0){
      setStock(stock)
      setTransactionNum(transactionNum)
    }
  }

  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  

  


  useEffect(() => {
    const priceMath = Math.ceil(Math.random() * (ProductData[productNum].high - ProductData[productNum].low) + ProductData[productNum].low);
    setPrice(priceMath);

    const stockMath = Math.ceil(Math.random() * (ProductData[productNum].stockHigh - ProductData[productNum].stockLow) + ProductData[productNum].stockLow);
    setStock(stockMath);

    
}, []);

let total = transactionNum * price;

if(total > 1){
  total = '-' + total
}


useEffect(() => {
  sendTotal(productNum,total);
}, [total]);



  return (
    <div className='mx-6 mt-4 border-b border-dashed h-12'>
    <div className='text-white grid grid-cols-4 text-start items-center'>
      <p className='text-start self-end'>{ProductData[productNum].name}</p>
      <p className='text-start self-end'>{price}</p>
      <p className={stock === 0 ?'text-start self-end text-red-900 font-bold w-6' : 'text-start self-end text-white w-6'}>{stock}</p>


      <div className='flex items-center justify-end ml-2'>
      <p className={total < 0 ? 'mx-4 w-12 text-center px-4 text-red-500' : 'mx-4 w-12 text-center px-4 text-white'}>{total}</p>

      <button onClick={sell} className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-green-800 hover:border-green-800 ease-in duration-300'>Sell</button>
      <button onClick={buy} className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-red-800 hover:border-red-800 ease-in duration-300 md:mr-12'>Buy</button>
      
   


      </div>
    </div>
    </div>
  )
}

export default Product
