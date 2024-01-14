import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../context/AppContext';
import HamburgerProfile from './HamburgerProfile';
import Logo from './Logo';
import StickySearch from './StickySearch';

const StickyNav = () => {
  const { isDarkMode, toggleTheme } = useContext(Context);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex flex-col w-full fixed top-0 right-0 z-10 bg-white transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className='py-20 grid grid-cols-3 w-full items-center justify-between m-b-20 px-50'>
          <Logo />
          <StickySearch />
          <HamburgerProfile />
        </div>
        <div className="border-b border-gray-300 w-full"></div>
      </div>
    </>
  );
};

export default StickyNav;
