import React from 'react'
import items from '../../../../data/items'
import sliders from '../../../../data/sliders';
import { NavLink } from 'react-router-dom'
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Borsa from '../components/Borsa';
import GuncelHaberler from '../components/GuncelHaberler';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function SıcakGundem() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
    const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
    const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

    return (
        <>
            {isBigScreen &&
                <BigSıcakGundem />
            }
            {isMiddleScreen &&
                <MiddleSıcakGundem />
            }
            {isSmallScreen &&
                <SmallSıcakGundem />
            }
            {isXSmallScreen &&
                <XSmallSıcakGundem />
            }
        </>
    )
}

export function BigSıcakGundem() {
    return (
        <div className='grid '>

            <div className="grid grid-col gap-y-1 pt-8 h-full items-center justify-center ">

                <div className="z-20 px-2">
                    <header className="font-bold text-xl flex items-center justify-start text-white">SICAK GÜNDEM</header>
                </div>

                <div className="flex gap-x-4 bg-white p-4 -mb-4 ">
                    
                    <div className='relative'>
                        <div className='absolute border w-[1rem] h-[17.5rem] -bottom-5 left-[13.7rem] bg-red-600 opacity-60'></div>
                        <div className='absolute border w-[15rem] h-[17.5rem] -bottom-5 -left-5 bg-red-600'></div>
                        <NavLink to='/' className='gap-x-2'>
                            <div className="relative ">
                                <img src={items[1].image} className="object-cover w-[24.5rem] h-[13rem] rounded-lg flex-shrink-0">
                                </img>
                            </div>
                        </NavLink>
                    </div>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="relative ">
                            <img src={items[2].image} className="object-cover w-[24.5rem] h-[13rem] rounded-lg flex-shrink-0">
                            </img>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="relative ">
                            <img src={items[3].image} className="object-cover w-[24.5rem] h-[13rem] rounded-lg flex-shrink-0">
                            </img>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className='grid grid-cols-1 h-full items-center justify-center '>
                <div className='flex items-center justify-center gap-x-3'>

                    <div className='max-w-[640px] items-center justify-center flex-shrink-0 translate-y-10'>
                        <Swiper
                            modules={[Navigation, A11y, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                                }
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{ width: '100%', height: '100%' }}
                        >
                            {sliders.map((slider) => (
                                <SwiperSlide key={slider.id} className="">
                                    <NavLink to={`/detail/${slider.id}`}>
                                        <div className='grid gap-x-3 items-center justify-center'>
                                            <img src={slider.image} className='w-[40rem] h-[30rem] rounded-md' />
                                        </div>
                                    </NavLink>
                                </SwiperSlide>

                            ))}
                            <div className='border-solid bg-white items-center flex mb-4 -translate-y-[1.5rem] h-[3.5rem]'>
                                <div className='swiper-pagination translate-y-3 flex items-center justify-around'></div>
                            </div>
                        </Swiper>
                        <div className=' ml-4 z-50 border-l-solid border-l '>
                            <div className=' flex items-center justify-center'>
                                <button>
                                    <GrPrevious className=' swiper-button-prev w-6 h-6 rounded-full text-white -translate-y-20' />
                                </button>
                            </div>
                        </div>
                        <div className=' ml-4 z-50 border-l-solid border-l'>
                            <div className=' flex items-center justify-center'>
                                <button>
                                    <GrNext className=' swiper-button-next w-7 h-7 rounded-full text-white -translate-y-20 ' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Borsa />
                        </div>
                    </div>

                    <div className='items-center overflow-ellipsis max-w-[200px] -translate-y-[3.3rem]'>
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[3].image} className="object-cover w-[250px] h-[7rem] rounded-lg"></img>
                                <div className=' border-solid bg-white'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                        <br />
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[3].image} className="object-cover w-[250px] h-[7rem] rounded-lg"></img>
                                <div className=' border-solid bg-white'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    <div className='items-center overflow-ellipsis max-w-[380px] -translate-y-1'>
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[4].image} className="object-cover w-[380px] h-[13rem] rounded-lg"></img>
                                <div className=' border-solid bg-white'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                        <br />
                        <NavLink to='/' className=''>
                            <div className="truncate">
                                <img src={items[4].image} className="object-cover w-[380px] h-[13rem] rounded-lg"></img>
                                <div className=' border-solid bg-white'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 h-full items-center justify-center translate-y-7'>
                <div className='flex items-center justify-center gap-x-3'>

                    <div className="flex gap-x-4 pb-14">
                        <NavLink to='/' className='gap-x-2'>
                            <div className="overflow-ellipsis max-w-[16.5rem]">
                                <img src={items[1].image} className="object-cover w-[16.5rem] h-[12rem] rounded-lg flex-shrink-0"></img>
                                <div className=' border-solid bg-white pb-8'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/' className='gap-x-2'>
                            <div className="overflow-ellipsis max-w-[16.5rem]">
                                <img src={items[2].image} className="object-cover w-[16.5rem] h-[12rem] rounded-lg flex-shrink-0"></img>
                                <div className=' border-solid bg-white pb-8'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/' className='gap-x-2'>
                            <div className="overflow-ellipsis max-w-[16.5rem]">
                                <img src={items[3].image} className="object-cover w-[16.5rem] h-[12rem] rounded-lg flex-shrink-0"></img>
                                <div className=' border-solid bg-white pb-8'>
                                    <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                    <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <GuncelHaberler />
                </div>
            </div>

        </div>
    )
}


export function MiddleSıcakGundem() {
    return (
        <div className='grid'>

        <div className="grid grid-col gap-y-1 pt-8 h-full items-center justify-center">

            <div className="z-20 px-2">
                <header className="font-bold text-xl flex items-center justify-start text-white">SICAK GÜNDEM</header>
            </div>

            <div className="flex gap-x-4 bg-white p-4 -mb-4">
                
                <div className='relative'>
                    <div className='absolute border w-[1rem] h-[17.5rem] -bottom-5 left-[13.7rem] bg-red-600 opacity-60'></div>
                    <div className='absolute border w-[15rem] h-[17.5rem] -bottom-5 -left-5 bg-red-600'></div>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="relative ">
                            <img src={items[1].image} className="object-cover w-[20rem] h-[12rem] rounded-lg flex-shrink-0">
                            </img>
                        </div>
                    </NavLink>
                </div>
                <NavLink to='/' className='gap-x-2'>
                    <div className="relative ">
                        <img src={items[2].image} className="object-cover w-[20rem] h-[12rem] rounded-lg flex-shrink-0">
                        </img>
                    </div>
                </NavLink>
                <NavLink to='/' className='gap-x-2'>
                    <div className="relative ">
                        <img src={items[3].image} className="object-cover w-[20rem] h-[12rem] rounded-lg flex-shrink-0">
                        </img>
                    </div>
                </NavLink>
            </div>
        </div>

        <div className='grid grid-cols-1 h-full items-center justify-center'>
            <div className='flex items-center justify-center gap-x-3'>

                <div className='max-w-[520px] items-center justify-center flex-shrink-0 translate-y-10'>
                    <Swiper
                        modules={[Navigation, A11y, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + '</span>';
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {sliders.map((slider) => (
                            <SwiperSlide key={slider.id} className="">
                                <NavLink to={`/detail/${slider.id}`}>
                                    <div className='grid gap-x-3 items-center justify-center'>
                                        <img src={slider.image} className='w-[33rem] h-[25rem] rounded-md' />
                                    </div>
                                </NavLink>
                            </SwiperSlide>

                        ))}
                        <div className='border-solid bg-white items-center flex mb-4 -translate-y-6 h-[3.5rem]'>
                            <div className='swiper-pagination translate-y-3 w-full flex items-center justify-around'></div>
                            </div>
                    </Swiper>
                    <div className=' ml-4 z-50 border-l-solid border-l '>
                        <div className=' flex items-center justify-center'>
                            <button>
                                <GrPrevious className=' swiper-button-prev w-6 h-6 rounded-full text-white -translate-y-20' />
                            </button>
                        </div>
                    </div>
                    <div className=' ml-4 z-50 border-l-solid border-l'>
                        <div className=' flex items-center justify-center'>
                            <button>
                                <GrNext className=' swiper-button-next w-7 h-7 rounded-full text-white -translate-y-20 ' />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Borsa />
                    </div>
                </div>

                <div className='items-center overflow-ellipsis max-w-[170px] -translate-y-[0.5rem]'>
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[170px] h-[7rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <br />
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[170px] h-[7rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className='items-center overflow-ellipsis max-w-[300px] translate-y-7'>
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[4].image} className="object-cover w-[300px] h-[11.5rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <br />
                    <NavLink to='/' className=''>
                        <div className="truncate">
                            <img src={items[4].image} className="object-cover w-[300px] h-[11.5rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 h-full items-center justify-center translate-y-7'>
            <div className='flex items-center justify-center gap-x-3'>

                <div className="flex gap-x-4 pb-14">
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[13.2rem]">
                            <img src={items[1].image} className="object-cover w-[14.5rem] h-[10.5rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[14.5rem]">
                            <img src={items[2].image} className="object-cover w-[14.5rem] h-[10.5rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[14.5rem]">
                            <img src={items[3].image} className="object-cover w-[14.5rem] h-[10.5rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-xs'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <GuncelHaberler />
            </div>
        </div>

    </div>
    )
}

export function SmallSıcakGundem() {
    return (
        <div className='grid'>

        <div className="grid grid-col gap-y-1 pt-8 h-full items-center justify-center">

            <div className="z-20 px-2">
                <header className="font-bold text-xl flex items-center justify-start text-white translate-y-3">SICAK GÜNDEM</header>
            </div>

            <div className="flex gap-x-4 bg-white p-4 -mb-4">
                
                <div className='relative'>
                    <div className='absolute border w-[1rem] h-[15.5rem] -bottom-5 left-[13.7rem] bg-red-600 opacity-60'></div>
                    <div className='absolute border w-[15rem] h-[15.5rem] -bottom-5 -left-5 bg-red-600'></div>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="relative ">
                            <img src={items[1].image} className="object-cover w-[18.5rem] h-[11rem] rounded-lg flex-shrink-0">
                            </img>
                        </div>
                    </NavLink>
                </div>
                <NavLink to='/' className='gap-x-2'>
                    <div className="relative ">
                        <img src={items[2].image} className="object-cover w-[18.5rem] h-[11rem] rounded-lg flex-shrink-0">
                        </img>
                    </div>
                </NavLink>
                <NavLink to='/' className='gap-x-2'>
                    <div className="relative ">
                        <img src={items[3].image} className="object-cover w-[18.5rem] h-[11rem] rounded-lg flex-shrink-0">
                        </img>
                    </div>
                </NavLink>
            </div>
        </div>

        <div className='grid grid-cols-1 h-full items-center justify-center'>
            <div className='flex items-center justify-center gap-x-3'>

                <div className='max-w-[490px] items-center justify-center flex-shrink-0 translate-y-10'>
                    <Swiper
                        modules={[Navigation, A11y, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + '</span>';
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {sliders.map((slider) => (
                            <SwiperSlide key={slider.id} className="">
                                <NavLink to={`/detail/${slider.id}`}>
                                    <div className='grid gap-x-3 items-center justify-center'>
                                        <img src={slider.image} className='w-[33rem] h-[23rem] rounded-md' />
                                    </div>
                                </NavLink>
                            </SwiperSlide>

                        ))}
                        <div className='border-solid bg-white items-center flex mb-4 -translate-y-6 h-[3.5rem]'>
                            <div className='swiper-pagination translate-y-3 w-full flex items-center justify-around'></div>
                            </div>
                    </Swiper>
                    <div className=' ml-4 z-50 border-l-solid border-l '>
                        <div className=' flex items-center justify-center'>
                            <button>
                                <GrPrevious className=' swiper-button-prev w-6 h-6 rounded-full text-white -translate-y-20' />
                            </button>
                        </div>
                    </div>
                    <div className=' ml-4 z-50 border-l-solid border-l'>
                        <div className=' flex items-center justify-center'>
                            <button>
                                <GrNext className=' swiper-button-next w-7 h-7 rounded-full text-white -translate-y-20 ' />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Borsa />
                    </div>
                </div>

                <div className='items-center overflow-ellipsis max-w-[160px] -translate-y-[1.7rem]'>
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[160px] h-[5.5rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex text-sm">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <br />
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[160px] h-[5.5rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex text-sm">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className='items-center overflow-ellipsis max-w-[270px] translate-y-5'>
                    <NavLink to='/' className=''>
                        <div className="">
                            <img src={items[4].image} className="object-cover w-[270px] h-[10rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <br />
                    <NavLink to='/' className=''>
                        <div className="truncate">
                            <img src={items[4].image} className="object-cover w-[270px] h-[10rem] rounded-lg"></img>
                            <div className=' border-solid bg-white'>
                                <span className=" p-2 text-black bg-opacity-50 font-extrabold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 h-full items-center justify-center translate-y-4'>
            <div className='flex items-center justify-center gap-x-3'>

                <div className="flex gap-x-4 pb-14">
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[13.2rem]">
                            <img src={items[1].image} className="object-cover w-[13.2rem] h-[10rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-bold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[13.2rem]">
                            <img src={items[2].image} className="object-cover w-[13.2rem] h-[10rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-bold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2'>
                        <div className="overflow-ellipsis max-w-[13.2rem]">
                            <img src={items[3].image} className="object-cover w-[13.2rem] h-[10rem] rounded-lg flex-shrink-0"></img>
                            <div className=' border-solid bg-white pb-8'>
                                <span className=" p-2 text-black bg-opacity-50 font-bold flex">{items[3].title}</span>
                                <span className='p-2 text-red-500 text-[9px] font-bold'>{items[3].hastag}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <GuncelHaberler />
            </div>
        </div>

    </div>
    )
}


export function XSmallSıcakGundem() {
    return (
        <div>

        </div>
    )
}

export function MobileSıcakGundem() {
    return (
        <div>

        </div>
    )
}


