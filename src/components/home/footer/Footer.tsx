import React, { useContext } from 'react'
import logo from '../nav/mask_logo.png'
import { Context } from '../../../context/AppContext';
const Footer = () => {
    const { isDarkMode } = useContext(Context);
  return (
      <div className={`${isDarkMode ? 'bg-darkModeColorTwo' : 'bg-footerBgDark'} w-full py-20 flex flex-col gap-40 justify-center`}>
        <div className="gap-16 flex flex-col px-50">
            <div className="flex flex-col gap-16">
                <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-24 font-semibold`}>Inspiration for future getaways</div>
                <div className="flex flex-col">
                    <div className="py-10 flex gap-20 text-14">
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className="border relative top-10 border-black"></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-500'} font-light h-full gap-5 opacity-70`}>
                            <div className="">Content</div>
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="border border-gray-300"></div>
                </div>
            </div>
            <div className="grid gap-20 grid-cols-6">
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>House rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Vacation rentals</div>
                </div>
                <div className="cursor-pointer">
                    <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold`}>Lagos</div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-light text-14 opacity-50`}>Apartment rentals</div>
                </div>
            </div>
        </div>
        <div className="border-b border-gray-300 w-full"></div>
        <div className="grid gap-10 grid-cols-3 px-50">
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Support</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Help Center</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Hosting</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>New features</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Cancellation options</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Support</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Help Center</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Hosting</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>New features</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Cancellation options</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Support</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Help Center</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Hosting</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>New features</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Cancellation options</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Support</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Help Center</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Hosting</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>New features</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Cancellation options</div>
            <div className={`${isDarkMode ? 'text-white' : 'text-textBlack'} text-14 font-semibold  hover:underline cursor-pointer`}>Support</div>
        </div>
        <div className="border-b border-gray-300 mx-50"></div>
        <div className={`flex justify-between items-center w-full px-50 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <div className="flex justify-center items-center gap-16">
                <div className="flex justify-center items-center gap-10">
                    <div className={`text-21 flex items-center justify-center h-full ${isDarkMode ? 'text-white' : 'text-black'}`}>© 2024 Mask, Inc.</div>
                    <div className={`text-21 flex items-center justify-center h-3 w-3 rounded-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className={`text-21 flex items-center justify-center h-full ${isDarkMode ? 'text-white' : 'text-black'}`}>Terms</div>
                    <div className={`text-21 flex items-center justify-center h-3 w-3 rounded-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className={`text-21 flex items-center justify-center h-full ${isDarkMode ? 'text-white' : 'text-black'}`}>Sitemap</div>
                    <div className={`text-21 flex items-center justify-center h-3 w-3 rounded-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className={`text-21 flex items-center justify-center h-full ${isDarkMode ? 'text-white' : 'text-black'}`}>Privacy</div>
                    <div className={`text-21 flex items-center justify-center h-3 w-3 rounded-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className={`text-21 flex items-center justify-center h-full ${isDarkMode ? 'text-white' : 'text-black'}`}>Your Privacy Choices</div>
                    <div className={`text-21 flex items-center justify-center h-3 w-3 rounded-50 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10">
                <div className="text-14 flex justify-center items-center gap-5">
                    <div className=""><i className="fa-solid fa-globe"></i></div>
                    <div className="hover:underline ">English (US)</div>
                </div>
                <div className="text-14 flex justify-center items-center gap-5">
                    <div className="">$</div>
                    <div className="hover:underline ">USD</div>
                </div>
                <div className="text-20 flex justify-center items-center gap-10">
                    <div className=""><i className="fa-brands fa-square-facebook"></i></div>
                    <div className=""><i className="fa-brands fa-square-twitter"></i></div>
                    <div className=""><i className="fa-brands fa-square-instagram"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer