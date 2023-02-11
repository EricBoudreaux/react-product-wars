import React from 'react'
import WeaponData from '../data/Weapons.json'

const Weapon = ({ weaponNum }) => {

 

  return (
    <div className='mx-6 mt-4 border-b border-dashed h-12'>
    <div className='text-white grid grid-cols-3 md:grid-cols-4 text-start items-center'>
      <p className='text-start self-end'>{WeaponData[weaponNum].name}</p>
      <p className='text-center md:text-start'>{WeaponData[weaponNum].price}</p>
      <p className='text-start self-end hidden md:block'>{WeaponData[weaponNum].disc}</p>

      <div className='flex justify-end items-center ml-4'>

      <button className='text-sm px-2 py-1 mr-2 bg-white text-black hover:bg-red-800 hover:border-red-800 ease-in duration-300'>Buy</button>
      </div>
    </div>
    </div>
  )
}

export default Weapon
