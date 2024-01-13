import React from 'react'
import LikeButton from './LikeButton'

const Listings = () => {
  return (
    <div className='px-50 py-50 grid grid-cols-4 gap-20 w-full'>
        <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
            <div className="w-full h-272">
                <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
            </div>
            <div className="flex justify-between w-full h-100">
                <div className="flex flex-col">
                    <div className="text-black font-semibold">Lekki, Nigeria</div>
                    <div className="text-14 text-fadedBlack">405 Kilometers away</div>
                    <div className="text-14 text-fadedBlack">Jan 14-19</div>
                    <div className="text-black font-semibold">$312 night</div>
                </div>
                <div className="text-black font-semibold"><i className="fa-solid fa-star"></i>&nbsp; New</div>
            </div>
            <div className="absolute top-20 right-20"><LikeButton /></div>
        </div>
        <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
            <div className="w-full h-272">
                <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
            </div>
            <div className="flex justify-between w-full h-100">
                <div className="flex flex-col">
                    <div className="text-black font-semibold">Lekki, Nigeria</div>
                    <div className="text-14 text-fadedBlack">405 Kilometers away</div>
                    <div className="text-14 text-fadedBlack">Jan 14-19</div>
                    <div className="text-black font-semibold">$312 night</div>
                </div>
                <div className="text-black font-semibold"><i className="fa-solid fa-star"></i>&nbsp; New</div>
            </div>
            <div className="absolute top-20 right-20"><LikeButton /></div>
        </div>
        <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
            <div className="w-full h-272">
                <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
            </div>
            <div className="flex justify-between w-full h-100">
                <div className="flex flex-col">
                    <div className="text-black font-semibold">Lekki, Nigeria</div>
                    <div className="text-14 text-fadedBlack">405 Kilometers away</div>
                    <div className="text-14 text-fadedBlack">Jan 14-19</div>
                    <div className="text-black font-semibold">$312 night</div>
                </div>
                <div className="text-black font-semibold"><i className="fa-solid fa-star"></i>&nbsp; New</div>
            </div>
            <div className="absolute top-20 right-20"><LikeButton /></div>
        </div>
        <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
            <div className="w-full h-272">
                <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
            </div>
            <div className="flex justify-between w-full h-100">
                <div className="flex flex-col">
                    <div className="text-black font-semibold">Lekki, Nigeria</div>
                    <div className="text-14 text-fadedBlack">405 Kilometers away</div>
                    <div className="text-14 text-fadedBlack">Jan 14-19</div>
                    <div className="text-black font-semibold">$312 night</div>
                </div>
                <div className="text-black font-semibold"><i className="fa-solid fa-star"></i>&nbsp; New</div>
            </div>
            <div className="absolute top-20 right-20"><LikeButton /></div>
        </div>
    </div>
  )
}

export default Listings