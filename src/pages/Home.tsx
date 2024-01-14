import React from 'react'
import Nav from '../components/home/nav/Nav'
import Footer from '../components/home/footer/Footer'
import Listings from '../components/home/listings/Listings'
import StickyNav from '../components/home/nav/StickyNav'

const Home = () => {
  return (
    <div className='font-circular flex flex-col items-center'>
        <Nav />
        <StickyNav />
        <Listings />
        <Footer />
    </div>
  )
}

export default Home