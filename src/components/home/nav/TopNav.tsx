import React, { useContext } from 'react'
import mask_logo from './mask_logo.png'
import { Context } from '../../../context/AppContext';
const TopNav = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className='py-20 grid grid-cols-3 w-full items-center  justify-between'>
        <div className="max-h-30 cursor-pointer grid-column: span 1 flex justify-start"><img src={mask_logo} alt="" className='max-h-30'/></div>
        <div className="flex items-center gap-10 justify-center font-circular grid-column: span 1">
            <div className="text-black cursor-pointer px-10 rounded-25 p-10">Stays</div>
            <div className="text-gray-500 cursor-pointer px-10 rounded-25 p-10 hover:bg-gray-200">Experiences</div>
            <div className="text-gray-500 cursor-pointer px-10 rounded-25 p-10 hover:bg-gray-200">Online Experiences</div>
        </div>
        <div className="flex gap-20  grid-column: span 1 justify-end">
            <div className="flex items-center gap-20 justify-center cursor-pointer p-10 rounded-50 hover:bg-gray-200" onClick={()=>toggleTheme()}>
                {isDarkMode ? <i className="fa-solid fa-moon text-20"></i> : <i className="fa-regular fa-sun text-20"></i>}
            </div>
            <div className="flex items-center gap-20  border border-gray-200 py-5 px-16 rounded-25 cursor-pointer hover:shadow-md transition duration-300 ease-in-out">
                <div className="text-20 text-black"><i className="fa-solid fa-bars"></i></div>
                <div className="text-28 text-gray-500"><i className="fa-solid fa-circle-user"></i></div>
            </div>
        </div>
    </div>
  )
}

export default TopNav