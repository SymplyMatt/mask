import React, { useContext, useState } from 'react'
import LikeButton from './LikeButton'
import { Autoplay, Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import { useSwiper } from 'swiper/react';
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Context } from '../../../context/AppContext';
const Listings = () => {
  const [swiper, setSwiper] = useState<any>(null);
const { isDarkMode } = useContext(Context);
  return (
    <>
        <div className='px-50 pt-20 pb-50 grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 mm:grid-cols-3 md:grid-cols-4 sm-tab:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 xxl:grid-cols-6 gap-20 w-full'>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/7c8e69eb-33be-4d5c-ad0c-6fffc0c0ca32.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/937700ee-dc2c-4bda-901b-ada55f598903.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/525a40d8-1927-49e5-a5b4-546afef3a26a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/88f1526d-6579-4df3-9737-51a89c83ddf3.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/a1ddbf4a-9bbe-454b-95e3-02eee395e319.jpg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/7c8e69eb-33be-4d5c-ad0c-6fffc0c0ca32.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/937700ee-dc2c-4bda-901b-ada55f598903.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/525a40d8-1927-49e5-a5b4-546afef3a26a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/88f1526d-6579-4df3-9737-51a89c83ddf3.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/a1ddbf4a-9bbe-454b-95e3-02eee395e319.jpg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/7c8e69eb-33be-4d5c-ad0c-6fffc0c0ca32.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/937700ee-dc2c-4bda-901b-ada55f598903.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/525a40d8-1927-49e5-a5b4-546afef3a26a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/88f1526d-6579-4df3-9737-51a89c83ddf3.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/a1ddbf4a-9bbe-454b-95e3-02eee395e319.jpg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/7c8e69eb-33be-4d5c-ad0c-6fffc0c0ca32.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/937700ee-dc2c-4bda-901b-ada55f598903.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/525a40d8-1927-49e5-a5b4-546afef3a26a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/88f1526d-6579-4df3-9737-51a89c83ddf3.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/a1ddbf4a-9bbe-454b-95e3-02eee395e319.jpg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/36c724d2-36f4-41ed-affb-d33fa36d10a4.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/7c8e69eb-33be-4d5c-ad0c-6fffc0c0ca32.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/937700ee-dc2c-4bda-901b-ada55f598903.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/525a40d8-1927-49e5-a5b4-546afef3a26a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/c191694c-36b3-47b0-b0e1-d19ce12ed516.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/88f1526d-6579-4df3-9737-51a89c83ddf3.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
            <div className="relative flex flex-col justify-between w-full h-372 gap-10 cursor-pointer">
                <div className="w-full h-272 z-0">
                    <Swiper
                        speed={500}
                        spaceBetween={0}
                        direction={"horizontal"}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full w-full group"
                        >
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/a1ddbf4a-9bbe-454b-95e3-02eee395e319.jpg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/2914cb0e-d892-4912-bb0f-8deced5e5298.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/9c06cb34-18e3-4757-b81d-e6023dccabb5.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/96d9c7ef-11ad-485f-bdf9-cd8a237bd20a.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1029060344815465060/original/3d778fb4-546e-460f-9de1-9ce61ad6b972.jpeg?im_w=720" alt="" className='w-full h-full rounded-15 object-cover'/>
                            </SwiperSlide>
                            <div className='swiper-button-next invisible group-hover:visible'></div>
                            <div className="swiper-button-prev invisible group-hover:visible"></div>
                    </Swiper>
                </div>
                <div className="flex justify-between w-full h-100">
                    <div className="flex flex-col">
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>Lekki, Nigeria</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>405 Kilometers away</div>
                        <div className={`text-14 ${isDarkMode ? 'text-fadedWhite' : 'text-fadedBlack'}`}>Jan 14-19</div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>$312 night</div>
                    </div>
                    <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}><i className="fa-solid fa-star"></i>&nbsp; New</div>
                </div>
                <div className="absolute top-20 right-20"><LikeButton /></div>
            </div>
        </div>
        <div className="flex px-50 flex-col justify-center items-center mb-50 text-24 gap-10">
            <div className="text-24 font-bold">Continue exploring amazing pools</div>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-20 py-12 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-20">Show more</button>
        </div>
    </>
  )
}

export default Listings