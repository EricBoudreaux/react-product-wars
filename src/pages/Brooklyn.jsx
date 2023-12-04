import React, { useState } from 'react'

import { GiPaperBagFolded, GiShop, GiPistolGun, GiBank, GiTalk } from 'react-icons/gi'


import SubwaySign from '../components/Travel/SubwaySign'
import Market from '../components/Market/Market'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop/Shop'
import GunStore from '../components/Gun Store/GunStore'

import 'animate.css';


const Brooklyn = () => {

  const [showMarket, setShowMarket] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const [showGunShop, setShowGunShop] = useState(false)

  const [showStore, setShowStore] = useState('')

  return (
    <div className='h-screen'>
      <Navbar loc='Brooklyn' />
      <div className='flex justify-center pt-4'>
      {/* <SubwaySign name={'Brooklyn'} c1={'red'} c2={'green'} c3={'green'} c4={'gray'} travel={false}/> */}
      
    </div>
    <div className='flex gap-2 px-5 justify-around my-4 animate__animated animate__fadeInUp animate__fast mt-12'>
      <button className='relative group p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('market')}>
        <GiPaperBagFolded size={80}/>
        <div className='opacity-0 group-hover:bottom-24 group-hover:opacity-100 group-focus:bottom-24 ease-in duration-300 group-focus:opacity-100  absolute bottom-20 my-2 bg-white text-black w-full'>Dealer</div>
        </button>
      <button className='relative group p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('shop')}><GiShop size={80}/>
      <div className='opacity-0 group-hover:bottom-24 group-hover:opacity-100 group-focus:bottom-24 ease-in duration-300 group-focus:opacity-100  absolute bottom-20  my-2 bg-white text-black w-full'>General Store</div>
      </button>
     <button className='relative group p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('gunStore')}><GiPistolGun size={80}/>
     <div className='opacity-0 group-hover:bottom-24 group-hover:opacity-100 group-focus:bottom-24 ease-in duration-300 group-focus:opacity-100  absolute bottom-20  my-2 bg-white text-black w-full'>Gun Shop</div></button>
     {/* <button className='relative group p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('bank')}><GiBank size={80}/>
     <div className='opacity-0 group-hover:bottom-24 group-hover:opacity-100 group-focus:bottom-24 ease-in duration-300 group-focus:opacity-100  absolute bottom-20  my-2 bg-white text-black w-full'>Bank</div>
     </button> */}
     <button className='relative group p-2 w-full flex justify-center rounded-sm bg-red-600 border-red-600' onClick={() => setShowStore('bank')}><GiTalk size={80}/>
     <div className='opacity-0 group-hover:bottom-24 group-hover:opacity-100 group-focus:bottom-24 ease-in duration-300 group-focus:opacity-100  absolute bottom-20  my-2 bg-white text-black w-full'>Local Gossip</div>
     </button>
    </div>



    
    {showStore === 'market' ? (<div className='animate__animated animate__fadeInUp animate__faster'><Market /></div>) : (<div className='hidden animate__animated animate__fadeInUp animate__faster'><Market /></div>) }


    {showStore === 'shop' ? (<div className='animate__animated animate__fadeInUp animate__faster'><Shop /></div>) : null }
    {showStore === 'gunStore' ? (<div className='animate__animated animate__fadeInUp animate__faster'><GunStore /></div>) : null }

    </div>
  )
}

export default Brooklyn
