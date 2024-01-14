import React from 'react'

const TopNavLinks = () => {
  return (
    <div className="flex items-center gap-10 justify-center font-circular grid-column: span 1">
        <div className="text-black cursor-pointer px-10 rounded-25 p-10 text-maskPurple">Stays</div>
        <div className="text-gray-500 cursor-pointer px-10 rounded-25 p-10 hover:bg-gray-200">Experiences</div>
        <div className="text-gray-500 cursor-pointer px-10 rounded-25 p-10 hover:bg-gray-200">Online Experiences</div>
    </div>
  )
}

export default TopNavLinks