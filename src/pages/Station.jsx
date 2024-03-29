import React, { useState } from 'react'

import { GiPaperBagFolded, GiShop, GiPistolGun, GiBank } from 'react-icons/gi'


import SubwaySign from '../components/Travel/SubwaySign'
import Market from '../components/Market/Market'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop/Shop'
import GunStore from '../components/Gun Store/GunStore'

import 'animate.css'

const Station = ({ borough }) => {


  const [showMarket, setShowMarket] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const [showGunShop, setShowGunShop] = useState(false)

  const [showStore, setShowStore] = useState('')

  return (
    <div className='h-screen'>
      <Navbar loc={borough} />
      <div className='flex justify-center pt-4'>
      {/* <SubwaySign name={'Brooklyn'} c1={'red'} c2={'green'} c3={'green'} c4={'gray'} travel={false}/> */}
      
    </div>
    <div className='flex gap-2 px-5 justify-around my-4 animate__animated animate__fadeInUp animate__fast'>
      <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('market')}><GiPaperBagFolded size={80}/></button>
      <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('shop')}><GiShop size={80}/></button>
     <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('gunStore')}><GiPistolGun size={80}/></button>
     <button className='p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('bank')}><GiBank size={80}/></button>
    </div>

    
    {showStore === 'market' ? (<div className='animate__animated animate__fadeInUp animate__faster'><Market /></div>) : (<div className='hidden animate__animated animate__fadeInUp animate__faster'><Market /></div>) }
    {showStore === 'shop' ? (<div className='animate__animated animate__fadeInUp animate__faster'><Shop /></div>) : null }
    {showStore === 'gunStore' ? (<div className='animate__animated animate__fadeInUp animate__faster'><GunStore /></div>) : null }

    </div>
  )
}

export default Station
