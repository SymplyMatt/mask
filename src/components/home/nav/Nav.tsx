import React, { useContext, useEffect, useState } from 'react';
import mask_logo from './mask_logo.png';
import { Context } from '../../../context/AppContext';
import TopNav from './TopNav';
import SearchFilter from './SearchFilter';

const Nav = () => {
  const { isDarkMode, toggleTheme } = useContext(Context);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && <div
        className={`flex flex-col w-full px-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <TopNav />
        <SearchFilter />
      </div>}
    </>
  );
};

export default Nav;
