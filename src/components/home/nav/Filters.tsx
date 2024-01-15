import React from 'react'
import FilterIcon from './FilterIcon'
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import { useSwiper } from 'swiper/react';
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
const Filters = () => {
  return (
    <>
        <div className="border-b border-gray-300 w-full"></div>
        <div className="grid grid-cols-7 auto gap: 10px; justify-between items-center px-50 pt-20 w-full">
            <div className="col-span-5  flex items-center gap-24 w-full justify-start">
                <Swiper
                    speed={500}
                    spaceBetween={0}
                    direction={"horizontal"}
                    slidesPerView={9}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation, Mousewheel]}
                    className="h-full w-full group"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 border-b-2 border-black justify-start hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg" alt="" /></div>
                                <div className="text-12">New</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="" /></div>
                                <div className="text-12">Rooms</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" /></div>
                                <div className="text-12">Design</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" /></div>
                                <div className="text-12">Iconic cities</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" /></div>
                                <div className="text-12">Luxe</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" alt="" /></div>
                                <div className="text-12">Vineyards</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg" alt="" /></div>
                                <div className="text-12">Play</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="" /></div>
                                <div className="text-12">Off-the-grid</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="" /></div>
                                <div className="text-12">Farms</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" /></div>
                                <div className="text-12">Islands</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center gap-5 text-black py-10 opacity-50 hover:opacity-100 cursor-pointer transition-transform transform-gpu hover:shadow-lg hover:border-b-2 hover:border-gray-300">
                                <div className="text-28 w-24"><img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" /></div>
                                <div className="text-12">Amazing pools</div>
                            </div>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible border border-gray-300'></div>
                        <div className="swiper-button-prev invisible group-hover:visible border border-gray-300"></div>
                </Swiper>
                
            </div>
            <div className="col-span-2 flex items-center w-full justify-end">
                <div className="flex justify-center items-center"><button type="button" className="text-black bg-white hover:bg-white focus:outline-none font-medium rounded-lg px-10 py-12 me-2 mb-2 text-14 border border-gray-300 flex justify-center items-center gap-5"><FilterIcon /> Filters</button></div>
                <div className="flex justify-center items-center"><button type="button" className="text-black bg-white hover:bg-white focus:outline-none font-medium rounded-lg px-10 py-12 me-2 mb-2 text-14 border border-gray-300 flex justify-center items-center gap-5">Display total before taxes <i className="fa-solid fa-toggle-off text-24 text-gray-600 flex justify-center items-center"></i></button></div>
            </div>
        </div>
    </>
  )
}

export default Filters