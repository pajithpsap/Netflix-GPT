import React from 'react'
import { Netflix_Logo } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-20 w-full'>
      <img className='w-44'
      src={Netflix_Logo} alt='ALT'/>
    </div>
  )
}

export default Header