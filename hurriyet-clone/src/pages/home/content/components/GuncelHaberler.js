import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import items from '../../../../data/items';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function GuncelHaberler() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
    const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
    const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

    return (
        <>
            {isBigScreen &&
                <BigGuncelHaberler />
            }
            {isMiddleScreen &&
                <MiddleGuncelHaberler />
            }
            {isSmallScreen &&
                <SmallGuncelHaberler />
            }
            {isXSmallScreen &&
                <XSmallGuncelHaberler />
            }
        </>
    )
}

export function BigGuncelHaberler() {
    return (
        <div className='grid border-solid bg-white w-[23.5rem] max-h-[370px] -translate-y-[3.8rem] '>

            <div className='border-b flex p-3 gap-x-[12rem]'>
                <p className='font-bold'>Güncel Haberler</p>
                <button><IoIosArrowRoundForward size={8} className='text-blue-400 border border-blue-400 rounded-full w-8 h-8' /></button>
            </div>

            <Swiper
                direction={'vertical'}
                spaceBetween={40}
                slidesPerView={3.5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-full max-h-[315px] bg-white"
            >
                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[0].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[0].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[0].hastag}</p>
                                            </div>
                                            <div className='justify-end items-center flex'>
                                                <img src={items[0].image} className='w-16 h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[1].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-5 px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[1].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[1].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[1].image} className='w-20 h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[2].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-10 px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[2].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[2].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[2].image} className='w-[5.5rem] h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[3].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-[3.75rem] px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[3].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[3].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[3].image} className='w-[4.2rem] h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[4].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-20 px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[4].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[4].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[4].image} className='w-20 h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[5].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-[6.25rem] px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[5].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[5].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[5].image} className='w-[4.3rem] h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                <NavLink to={`/detail/${items[6].id}`}>
                                        <div className='flex gap-x-3 items-center justify-center mt-[7.5rem] px-5'>
                                            <div>
                                            <p className='text-[13px] font-bold'>{items[6].title}</p>
                                            <p className='text-[11px] text-red-600 pt-2'>{items[6].hastag}</p>
                                            </div>
                                            <div>
                                                <img src={items[6].image} className='w-[5.5rem] h-16'/>
                                            </div>
                                        </div>
                                        </NavLink>
                                </SwiperSlide>

            </Swiper>
        </div>

    )
}


export function MiddleGuncelHaberler() {
    return (
        <div className='grid border-solid bg-white w-[18.7rem] max-h-[370px] -translate-y-[rem] '>

        <div className='border-b flex p-3 gap-x-[7rem]'>
            <p className='font-bold'>Güncel Haberler</p>
            <button><IoIosArrowRoundForward  className='text-blue-400 border border-blue-400 rounded-full w-7 h-7' /></button>
        </div>

        <Swiper
            direction={'vertical'}
            spaceBetween={40}
            slidesPerView={3.5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full max-h-[315px] bg-white"
        >
                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[0].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[0].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[0].hastag}</p>
                                        </div>
                                        <div className='justify-end items-center flex'>
                                            <img src={items[0].image} className='w-16 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[1].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-5 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[1].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[1].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[1].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[2].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-10 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[2].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[2].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[2].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[3].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[3.75rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[3].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[3].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[3].image} className='w-[4.2rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[4].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-20 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[4].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[4].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[4].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[5].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[6.25rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[5].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[5].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[5].image} className='w-[4.3rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[6].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[7.5rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[6].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[6].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[6].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

        </Swiper>
    </div>

    )
}


export function SmallGuncelHaberler() {
    return (
        <div className='grid border-solid bg-white w-[17rem] max-h-[370px] -translate-y-[0.2rem] '>

        <div className='border-b flex p-3 gap-x-[8rem]'>
            <p className='font-bold'>Güncel Haberler</p>
            <button><IoIosArrowRoundForward size={8} className='text-blue-400 border border-blue-400 rounded-full w-8 h-8' /></button>
        </div>

        <Swiper
            direction={'vertical'}
            spaceBetween={40}
            slidesPerView={3.5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full max-h-[315px] bg-white"
        >
                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[0].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[0].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[0].hastag}</p>
                                        </div>
                                        <div className='justify-end items-center flex'>
                                            <img src={items[0].image} className='w-16 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[1].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-5 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[1].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[1].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[1].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[2].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-10 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[2].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[2].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[2].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[3].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[3.75rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[3].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[3].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[3].image} className='w-[4.2rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[4].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-20 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[4].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[4].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[4].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[5].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[6.25rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[5].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[5].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[5].image} className='w-[4.3rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[6].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[7.5rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[6].title}</p>
                                        <p className='text-[9px] font-bold text-red-600 pt-2'>{items[6].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[6].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

        </Swiper>
    </div>

    )
}

export function XSmallGuncelHaberler() {
    return (
        <div className='grid border-solid bg-white w-[23.5rem] max-h-[370px] -translate-y-[3.8rem] '>

        <div className='border-b flex p-3 gap-x-[12rem]'>
            <p className='font-bold'>Güncel Haberler</p>
            <button><IoIosArrowRoundForward size={8} className='text-blue-400 border border-blue-400 rounded-full w-8 h-8' /></button>
        </div>

        <Swiper
            direction={'vertical'}
            spaceBetween={40}
            slidesPerView={3.5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full max-h-[315px] bg-white"
        >
                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[0].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[0].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[0].hastag}</p>
                                        </div>
                                        <div className='justify-end items-center flex'>
                                            <img src={items[0].image} className='w-16 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[1].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-5 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[1].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[1].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[1].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[2].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-10 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[2].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[2].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[2].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[3].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[3.75rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[3].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[3].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[3].image} className='w-[4.2rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[4].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-20 px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[4].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[4].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[4].image} className='w-20 h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[5].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[6.25rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[5].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[5].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[5].image} className='w-[4.3rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

                            <SwiperSlide className="">
                            <NavLink to={`/detail/${items[6].id}`}>
                                    <div className='flex gap-x-3 items-center justify-center mt-[7.5rem] px-5'>
                                        <div>
                                        <p className='text-[13px] font-bold'>{items[6].title}</p>
                                        <p className='text-[11px] text-red-600 pt-2'>{items[6].hastag}</p>
                                        </div>
                                        <div>
                                            <img src={items[6].image} className='w-[5.5rem] h-16'/>
                                        </div>
                                    </div>
                                    </NavLink>
                            </SwiperSlide>

        </Swiper>
    </div>

    )
}