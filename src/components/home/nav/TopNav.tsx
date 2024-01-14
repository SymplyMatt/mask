import React, { useContext } from 'react'
import mask_logo from './mask_logo.png'
import { Context } from '../../../context/AppContext';
import Logo from './Logo';
import TopNavLinks from './TopNavLinks';
import HamburgerProfile from './HamburgerProfile';
const TopNav = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className='py-20 grid grid-cols-3 w-full items-center  justify-between'>
        <Logo />
        <TopNavLinks />
        <HamburgerProfile />
    </div>
  )
}

export default TopNav