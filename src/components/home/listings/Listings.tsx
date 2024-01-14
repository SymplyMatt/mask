import React, { useState } from 'react'
import LikeButton from './LikeButton'
import { Autoplay, Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import { useSwiper } from 'swiper/react';
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
const Listings = () => {
  const [swiper, setSwiper] = useState<any>(null);
  return (
    <div className='px-50 py-50 grid grid-cols-4 gap-20 w-full'>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/36c724d2-36f4-41ed-affb-d33fa36d10a4.webp" alt="" className='w-full h-full rounded-15 object-cover'/>
                        </SwiperSlide>
                        <div className='swiper-button-next invisible group-hover:visible'></div>
                        <div className="swiper-button-prev invisible group-hover:visible"></div>
                </Swiper>
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