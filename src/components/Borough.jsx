import React from 'react'

import Market from '../components/Market/Market'

import Shop from '../components/Shop/Shop'
import GunStore from '../components/Gun Store/GunStore'

import BoroughData from './data/Boroughs.json'

const Borough = ({ boroughNum }) => {

  
  return (
    <div>
        <div className='flex gap-2 px-5 justify-around my-4 animate__animated animate__fadeInUp animate__fast'>
            {/* Market */}
            
            <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('market')}><GiPaperBagFolded size={80}/></button>
            
            {BoroughData[boroughNum]}

            {/* Shop */}
            <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('shop')}><GiShop size={80}/></button>


            {/* Gun Shop */}
            <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('gunStore')}><GiPistolGun size={80}/></button>


            {/* Bank */}
            <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('bank')}><GiBank size={80}/></button>

            
            {/* Words */}
            <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('words')}><GiTalk size={80}/></button>
        </div>

    
        {showStore === 'market' ? (<Market />) : null }
        {showStore === 'shop' ? (<Shop />) : null }
        {showStore === 'gunStore' ? (<GunStore />) : null }
    </div>
  )
}

export default Borough