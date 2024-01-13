import React from 'react'
import Nav from '../components/home/nav/Nav'
import Footer from '../components/home/footer/Footer'
import Listings from '../components/home/listings/Listings'

const Home = () => {
  return (
    <div className='font-circular flex flex-col items-center'>
        <Nav />
        <Listings />
        <Footer />
    </div>
  )
}

export default Home