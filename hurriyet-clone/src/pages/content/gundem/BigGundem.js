import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { MdOutlineOtherHouses } from "react-icons/md";
import hastag from '../../../data/hastag';
import BigCarouselGundem from './components/BigCarouselGundem';

export default function BigGundem() {

    return (
        <div className='bg-white w-full h-full flex justify-center text-wrap gap-x-[3.5rem]'>

            <div className='flex flex-col pt-8'>
                <div className='flex items-center justify-center gap-x-[34rem]'>

                    <div className='flex flex-col gap-x-6 py-6 justify-start items-start '>
                        <div className='flex text-xs font-bold flex-shrink-0'>
                            <NavLink to='/'><span className='hover:opacity-70 transiton duration-300 cursor-pointer'>HABERLER</span></NavLink>
                            <MdNavigateNext className='items-center justify-center flex' />
                            <NavLink to='/'><span className='hover:opacity-70 transiton duration-300 cursor-pointer'>GÜNDEM</span></NavLink>
                        </div>

                        <div className='flex gap-x-2 pt-4'>
                            <div>
                                <div className="flex justify-start items-start w-full py-4 flex-shrink-0">
                                    <div className="w-[0.5rem] h-[0.5rem] bg-red-600 rounded-full"></div>
                                </div>
                                <div className="flex justify-start items-start w-full py-4 flex-shrink-0 -translate-y-6">
                                    <div className="w-[0.5rem] h-[0.5rem] bg-red-600 rounded-full"></div>
                                </div>
                            </div>
                            <header className='font-bold flex-shrink-0 -my-2 text-[45px]'>
                                Gündem
                            </header>
                        </div>

                        <div className="flex justify-start items-start w-full -my-2 flex-shrink-0">
                            <div className="w-[0.3rem] h-8 bg-red-600"><span className='w-[45rem] flex items-center mx-3 my-1 font-semibold'>Güncel Haberler, Bugün Yaşanan Son Olaylar ve Gelişmeler</span></div>
                        </div>
                    </div>

                    <div className='flex gap-x-2 '>
                        <NavLink className='border p-2 rounded-full border-gray-500 bg-[#2f619d] hover:bg-gray-800 hover:opacity-90 transition duration-300'>
                            <FaFacebookF className='text-white' />
                        </NavLink>
                        <NavLink className='border p-2 rounded-full border-gray-500 hover:bg-zinc-100 transition duration-300'>
                            <MdOutlineLocalPostOffice />
                        </NavLink>
                        <NavLink className='border p-2 rounded-full border-gray-500 hover:bg-zinc-100 transition duration-300'>
                            <MdOutlineOtherHouses />
                        </NavLink>
                    </div>
                </div>

                <div className='-translate-y-12'>
                          <BigCarouselGundem/>
                </div>

            </div>

            <div className='flex py-[4rem]'>
                <div className='flex flex-col border w-[18rem] h-[15rem] bg-zinc-100'>
                    <span className='font-bold text-[20px] p-4'>Etiketlerle Hızlı Gündem :</span>
                    <div className="flex flex-wrap items-center justify-center">
                        {hastag && hastag.map((hastags, index) => (
                            <NavLink key={index} className='flex items-center justify-center w-[8rem] h-[2rem] pb-4'>
                                <span>{hastags.hastagName}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )

}