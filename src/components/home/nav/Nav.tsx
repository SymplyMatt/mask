import React, { useContext } from 'react'
import mask_logo from './mask_logo.png'
import { Context } from '../../../context/AppContext';
import TopNav from './TopNav';
import SearchFilter from '../SearchFilter';
const Nav = () => {
    const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className="flex flex-col w-full">
        <TopNav />
        <SearchFilter />
    </div>
  )
}

export default Nav