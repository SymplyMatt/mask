import React, { useContext } from 'react'
import Nav from '../components/home/nav/Nav'
import Footer from '../components/home/footer/Footer'
import Listings from '../components/home/listings/Listings'
import StickyNav from '../components/home/nav/StickyNav'
import { Context } from '../context/AppContext'

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(Context);
  return (
    <div className='font-circular flex flex-col items-center'>
      <div className={`${isDarkMode && 'bg-darkModeColorOne'}`}>
        <Nav />
        <StickyNav />
        <Listings />
        <Footer />
      </div>
    </div>
  )
}

export default Home