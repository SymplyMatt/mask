import React, { useContext } from 'react'
import { Context } from '../../../context/AppContext';

const HamburgerProfile = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className="flex gap-20  grid-column: span 1 justify-end">
        <div className={`flex items-center gap-20 justify-center cursor-pointer p-10 rounded-50 ${isDarkMode ? 'hover:bg-darkModeColorTwo text-white' : 'hover:bg-gray-200 text-black'}`} onClick={()=>toggleTheme()}>
            {isDarkMode ? <i className="fa-solid fa-sun text-20"></i> : <i className="fa-regular fa-moon text-20"></i>}
        </div>
        <div className={`flex items-center gap-20  border ${isDarkMode ? 'border-darkModeColorTwo' : 'border-gray-200'} border-gray-200 py-5 px-16 rounded-25 cursor-pointer hover:shadow-md transition duration-300 ease-in-out`}>
            <div className={`text-20 ${isDarkMode ? 'text-white' : 'text-black'}`}><i className="fa-solid fa-bars"></i></div>
            <div className={`text-28 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}><i className="fa-solid fa-circle-user"></i></div>
        </div>
    </div>
  )
}

export default HamburgerProfile