import React, { useContext } from 'react'
import { Context } from '../../../context/AppContext';
import HamburgerProfile from './HamburgerProfile';
import Logo from './Logo';
import StickySearch from './StickySearch';
const StickyNav = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className="flex flex-col w-full">
        <div className='py-20 grid grid-cols-3 w-full items-center  justify-between m-b-20 px-50'>
            <Logo />
            <StickySearch />
            <HamburgerProfile />
        </div>
        <div className="border-b border-gray-300 w-full"></div>
    </div>
  )
}

export default StickyNav