import React from 'react'
import Bag from '../components/Inventory/Bag'
import SubwaySign from '../components/Travel/SubwaySign'
import Subway from '../components/Travel/Subway'
import Money from './Money'

import { GiAmberMosquito, GiBanknote, GiHeartBeats } from 'react-icons/gi'
import { BiTime } from 'react-icons/bi'

const Navbar = ({ loc, money, health, time }) => {


  health = 100
  time = '9:00am'

  return (
    <div className='w-full'>
      <div className='flex justify-center'>
        <div><Bag /></div>
        <div><SubwaySign  name={loc} travel={false}/></div>
        <div><Subway/></div>
      </div>
      <div className='flex justify-between px-12 my-4'>
      <div className='text-white flex items-center relative'>
      <p className='text-3xl mr-3'>{health}%</p>
      <GiHeartBeats className='text-red-600/20 absolute bottom-[-50px] left-[-20px]' size={120}/>
      </div>
      <div className='text-white flex items-center relative'>
      <GiBanknote className='text-green-600/20 absolute left-[-15px]' size={120}/>
      <p className='text-3xl ml-3'><Money /></p>
      </div>
 
      <div className='text-white flex items-center relative'>
      <p className='text-3xl mr-3'>{time}</p>
      <BiTime className='text-white/20 absolute left-[-10px]' size={120}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
