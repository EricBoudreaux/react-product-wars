import React from 'react'
import Bag from '../components/Inventory/Bag'
import SubwaySign from '../components/Travel/SubwaySign'
import Subway from '../components/Travel/Subway'

import { GiBanknote, GiHeartBeats } from 'react-icons/gi'

const Navbar = ({ loc, money, health }) => {

  money = 25
  health = 100
  return (
    <div className='w-full'>
      <div className='flex justify-center'>
        <div><Bag /></div>
        <div><SubwaySign  name={loc} travel={false}/></div>
        <div><Subway/></div>
      </div>
      <div className='flex justify-between px-12 my-4'>
      <div className='text-white flex items-center'>
      <GiBanknote size={50}/>
      <p className='text-3xl ml-3'>${money}</p>
      </div>
      <div className='text-white flex items-center'>
      <p className='text-3xl mr-3'>{health}%</p>
      <GiHeartBeats size={50}/>

      </div>
      </div>
    </div>
  )
}

export default Navbar
