import React, { useContext, useEffect, useState } from 'react';
import mask_logo from './mask_logo.png';
import { Context } from '../../../context/AppContext';
import TopNav from './TopNav';
import SearchFilter from './SearchFilter';
import Filters from './Filters';

const Nav = () => {
  const { isDarkMode, toggleTheme } = useContext(Context);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY === 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex flex-col w-full transition-opacity duration-300`}
      >
        <TopNav />
        <SearchFilter />
        <Filters />
      </div>
    </>
  );
};

export default Nav;
