import React from 'react'

const StickySearch = () => {
  return (
        <div className='flex grid-column: span 1 justify-between items-center border border-gray-200 rounded-30 cursor-pointer mx-auto text-12 shadow-md transition duration-300 ease-in-out px-10'>
        <div className="flex items-center justify-center rounded-30 flex-shrink-0">
            <div className="grid-column: span 1 px-16 py-16 flex justify-center items-center">
                <div className="font-semibold flex justify-center items-center">Anywhere</div>
            </div>
        </div>
        <div className="grid-column: span 1 grid grid-cols-1 justify-center items-center flex-shrink-0">
            <div className="flex justify-center items-center">
                <div className="h-40 bg-gray-200 w-1 opacity-100"></div>
                <div className="grid-column: span 1  py-16 px-16 rounded-30 w-full flex justify-center items-center">
                    <div className="font-semibold flex justify-center items-center">Any week</div>
                </div>
                <div className="h-40 bg-gray-200 w-1 opacity-100"></div>
            </div>
        </div>
        <div className="flex justify-center items-center flex-shrink-0">
            <div className="grid-column: span 1 rounded-30 flex items-center justify-between px-10 w-full">
                <div className="px-16 py-16 flex justify-center items-center">
                    <div className="flex justify-center items-center">Add guests</div>
                </div>
                <div className="rounded-50 bg-maskPurple w-30 h-30 flex justify-center items-center font-semibold text-white text-12"><i className="fa-solid fa-magnifying-glass flex justify-center items-center"></i></div>
            </div>
        </div>
    </div>
  )
}

export default StickySearch