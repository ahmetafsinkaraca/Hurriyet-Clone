import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import yazarlar from '../../../../data/yazarlar';
import { MdNavigateNext } from 'react-icons/md'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


export default function SmallYazarlar() {
  return (
    <div className='flex flex-col items-center justify-center mt-5 h-full'>

      <div className='flex gap-x-6 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
          Yazarlar
        </header>

        <div className="flex justify-center items-center w-full">
          <div className="w-[38rem] h-2 bg-[#220b57]"></div>
        </div>

        <div className=''>
          <NavLink to='yasam' className='flex justify-center items-center gap-x-2 flex-shrink-0 text-nowrap'>
            <button>hurriyet.com.tr/yazarlar </button>
            <MdNavigateNext />
          </NavLink>
        </div>
      </div>

      <div className='max-w-[58rem]'>
      <Swiper
        className="third-swiper"
        modules={[Navigation, A11y, Pagination]}
        spaceBetween={0}
        slidesPerView={6}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}

        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: '100%', height: '100%' }}
      >
        {yazarlar && yazarlar.map((yazar, id) => (
          <SwiperSlide key={yazar.id}
            className="flex items-center opacity-100 hover:opacity-70 transition-all duration-100 -mx-20px">


            <NavLink to={`/detail/${yazar.id}`} className="flex flex-col items-center">
              <div className='basis-auto flex-nowrap whitespace-nowrap hover:text-opacity-60'>
                <img src={yazar.image} className=' h-[8.5rem] w-[12rem] object-contain' />
              </div>
              <div className='bg-white'>
                <div className='p-4 flex flex-col line-clamp-3 w-[12rem]'>
                  <span className='text-sm font-bold text-red-600 text-[15px] hover:text-opacity-60 bg-white]'>{yazar.name}</span>
                  <span className='text-sm text-left text-black font-bold hover:text-opacity-60 bg-white pt-3 pb-1'>{yazar.description}</span>
                </div>
              </div>

            </NavLink>
          </SwiperSlide>
        ))}

        <div className='items-center flex mt-10'>
          <div className='swiper-pagination-custom w-full flex items-center justify-around mx-auto z-20'></div>
        </div>
      </Swiper>
      </div>

        <div className='-translate-x-[5rem] -translate-y-1 z-40'>
          <div className=' flex items-center justify-center '>
            <button>
              <GrPrevious className=' swiper-button-prev w-6 h-6 rounded-full text-black' />
            </button>
          </div>
        </div>
        <div className='translate-x-[5rem] -translate-y-1 z-40'>
          <div className=' flex items-center justify-center '>
            <button>
              <GrNext className=' swiper-button-next w-6 h-6 rounded-full text-black' />
            </button>
          </div>
        </div>
      </div>

  )
}