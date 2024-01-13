import React from 'react'
import Nav from '../components/home/nav/Nav'
import Footer from '../components/home/footer/Footer'

const Home = () => {
  return (
    <div className='font-circular flex flex-col items-center'>
        <Nav />
        <div className="h-200"></div>
        <Footer />
    </div>
  )
}

export default Home