import React from 'react'
import hastag from '../../../data/hastag'
import { useMediaQuery } from "react-responsive"
import { NavLink } from 'react-router-dom';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdNavigateNext } from "react-icons/md";


export default function BottomNavbar() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1050px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1049px)' })

  return (

    <>
      {isBigScreen &&
        <BigBottomNavbar />
      }
      {isTabletOrMobile &&
        <MobileBottomNavbar />
      }
    </>

  )

}


export function MobileBottomNavbar() {
  return (
    <div className='flex gap-x-3 items-center justify-center py-2 overflow-hidden flex-shrink-0 '>
      <nav className='flex items-center justify-center gap-x-5 flex-shrink-0'>
        <NavLink to='/'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>ANASAYFA</p>
        </NavLink>
        <NavLink to='gundem'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>GÜNDEM</p>
        </NavLink>
        <NavLink to='dunya'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>DÜNYA</p>
        </NavLink>
        <NavLink to='bigpara'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>BİGPARA</p>
        </NavLink>
        <NavLink to='sporarena'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>SPOR ARENA</p>
        </NavLink>
        <NavLink to='kelebek'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>KELEBEK</p>
        </NavLink>
        <NavLink to='yasam'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>YAŞAM</p>
        </NavLink>
        <NavLink to='yazarlar'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>YAZARLAR</p>
        </NavLink>
        <NavLink to='resmiilanlar'>
          <p className=' hover:text-zinc-200 text-gray-400 font-semibold transition-transform duration-500 ease-in-out text-lg'>RESMİ İLANLAR</p>
        </NavLink>
      </nav>
    </div>
  )
}


export function BigBottomNavbar() {

  return (
    <div className='flex sticky top-0  h-15 items-center justify-center bg-white w-full overflow-hidden flex-shrink-0'>
      <h3 className='font-bold px-5' style={{ whiteSpace: 'nowrap' }}>Bugün neler oldu?</h3>
      
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        loop
        navigation={{
          nextEl: '.swiper-button-next-unique'
        }}

        onSwiper={(swiper) => console.log(swiper)}
        className=' w-full'
      >
        {hastag.map((hastags) => (
          <SwiperSlide key={hastags.id}
            className="swiperSlideCustom  w-full  flex items-center opacity-100 hover:opacity-70 transition-all duration-100 ">


            <NavLink to={`/detail/${hastags.id}`} className="flex items-center  w-full ">

              <div className='flex basis-auto flex-nowrap whitespace-nowrap hover:text-opacity-60 '>

                <p className='text-sm text-left text-black font-bold hover:text-opacity-60' >
                  <span className='font-bold  text-red-600 text-[15px] hover:text-opacity-60 mr-1'>{hastags.hastagName}</span>
                  {hastags.description}</p>

              </div>
            </NavLink>

          </SwiperSlide>

        ))}
      </Swiper>

      <div className=' ml-4 p-2 z-50 border-l-solid border-l  border-l-[#d9d9d9] '>
        <div className=' flex items-center justify-center'>
          <button>
            <MdNavigateNext className=' swiper-button-next-unique w-10 h-10 rounded-full p-2 text-white bg-[#00579b]' />
          </button>
        </div>
      </div>
    </div>
  )
}







/* return (
  <div className='flex py-1.5 sticky top-0 items-center justify-center bg-white w-full overflow-hidden flex-shrink-0'>
    <h3 className='font-bold px-5' style={{ whiteSpace: 'nowrap'}}>Bugün neler oldu?</h3>
    <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next'
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {hastag.map((hastags) => (
            <SwiperSlide key={hastags.id} className="w-full border border-r-black border-solid max-w-12">
              <div className='flex gap-x-3 items-center justify-center py-2 overflow-hidden flex-shrink-0'>
                <h3 className='font-bold px-4 overflow-ellipsis text-red-600 text-[15px]'>{hastags.hastagName}</h3>
                <p className='text-sm font-bold' style={{ whiteSpace: 'nowrap', width:'full', flexShrink:0}}>{hastags.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        <div className='swiper-button-next'></div>
      </div>
    ) */