import React, { useContext, useEffect, useState } from 'react';
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
      setIsVisible(scrollY == 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && <div
        className={`flex flex-col w-full transition-opacity duration-300 transition-all duration-100 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <TopNav />
        <SearchFilter />
        <div className="mt-30">
          <Filters />
        </div>
      </div>}
    </>
  );
};

export default Nav;
