import React, { useContext } from 'react'
import { Context } from '../../../context/AppContext';

const TopNavLinks = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className="flex items-center gap-10 justify-center font-circular grid-column: span 1">
        <div className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer px-10 rounded-25 p-10`}>Stays</div>
        <div className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer px-10 rounded-25 p-10 ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'} opacity-50`}>Experiences</div>
        <div className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer px-10 rounded-25 p-10 ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'} opacity-50`}>Online Experiences</div>
    </div>
  )
}

export default TopNavLinks