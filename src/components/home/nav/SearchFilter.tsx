import React, { useContext } from 'react'
import { Context } from '../../../context/AppContext';

const SearchFilter = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <>
        <div className={`grid grid-cols-3 w-[80%] justify-between items-center border ${isDarkMode ? 'border-darkModeColorTwo' : 'border-gray-200'} border-gray-200 rounded-30 cursor-pointer mx-auto text-12 shadow-md transition duration-300 ease-in-out mx-50`}>
            <div className={`group flex items-center justify-between ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'} rounded-30`}>
                <div className="grid-column: span 1 px-16 py-16">
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} "font-semibold"`}>Where</div>
                    <div className={`${isDarkMode ? 'text-white opacity-50' : 'text-gray-500'}`}>Search destinations</div>
                </div> 
                <div className="h-40 bg-gray-300 w-1 opacity-100 group-hover:opacity-0"></div>
            </div>
            <div className="grid-column: span 1 grid grid-cols-2 justify-between items-center">
                <div className={`grid-column: span 1 py-16 px-16 rounded-30 ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'}`}>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} "font-semibold"`}>Check In</div>
                    <div className={`${isDarkMode ? 'text-white opacity-50' : 'text-gray-500'}`}>Add dates</div>
                </div>
                <div className="group flex justify-center items-center">
                    <div className="h-40 bg-gray-300 w-1 opacity-100 group-hover:opacity-0"></div>
                    <div className={`grid-column: span 1  py-16 px-16 rounded-30 ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'} w-full`}>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} "font-semibold"`}>Check Out</div>
                        <div className={`${isDarkMode ? 'text-white opacity-50' : 'text-gray-500'}`}>Add dates</div>
                    </div>
                </div>
            </div>
            <div className="group flex justify-center items-center">
                <div className="h-40 bg-gray-300 w-1 opacity-100 group-hover:opacity-0"></div>
                <div className={`grid-column: span 1 rounded-30 ${isDarkMode ? 'hover:bg-darkModeColorTwo' : 'hover:bg-gray-200'} flex items-center justify-between px-16 w-full`}>
                    <div className="px-16 py-16 ">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} "font-semibold"`}>Who</div>
                        <div className={`${isDarkMode ? 'text-white opacity-50' : 'text-gray-500'}`}>Add guests</div>
                    </div>
                    <div className="rounded-50 bg-maskPurple w-50 h-50 flex justify-center items-center font-semibold text-white text-20"><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchFilter