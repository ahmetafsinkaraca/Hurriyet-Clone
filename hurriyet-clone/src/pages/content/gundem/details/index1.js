import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { MdOutlineOtherHouses } from "react-icons/md";
import gundem from '../../../../data/gundem'
import hastag from '../../../../data/hastag'
import { AiFillThunderbolt } from "react-icons/ai";


export default function Index1() {
  return (
    <div className='flex items-center flex-col justify-center flex-wrap text-wrap bg-white w-full h-full'>
      <div className='flex justify-center text-wrap gap-x-[3.5rem]'>

        <div className='flex flex-col pt-8'>

          <div className='flex text-xs font-bold flex-shrink-0 items-start justify-start'>
            <NavLink to='/'><span className='hover:opacity-70 transiton duration-300 cursor-pointer'>HABERLER</span></NavLink>
            <MdNavigateNext className='items-center justify-center flex' />
            <NavLink to='/'><span className='hover:opacity-70 transiton duration-300 cursor-pointer'>GÜNDEM</span></NavLink>
          </div>

          <div className='flex flex-col pt-4 gap-x-2'>
            <header className='font-bold flex-shrink-0 -my-2 text-[45px]'>
              {gundem[1].title}
            </header>

            <span className='py-4'>Güncelleme Tarihi: {gundem[1].updateDate}</span>

            <span className='relative -translate-y-5'>

              <span className='flex  gap-x-[1rem] absolute top-3 -left-2'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="border-solid bg-zinc-200 w-20 h-8 m-2 rounded-full"></div>
                ))}
              </span>

              <span className='flex gap-x-[4rem] absolute top-[1.6rem] left-4'>
                {hastag && hastag.slice(0, 3).map((hastags, index) => (
                  <NavLink key={index} to='/'>
                    <div className='text-[13px] font-semibold'>
                      {hastags.hastagName}
                    </div>
                  </NavLink>
                ))}

                <span className='translate-x-[50rem]'>
                  <div className='flex gap-x-2 items-center justify-center'>
                    <NavLink className='flex items-center justify-center w-8 h-8 border p-2 rounded-full border-gray-500 bg-[#2f619d] hover:bg-gray-800 hover:opacity-90 transition duration-300'>
                      <FaFacebookF className='text-white' />
                    </NavLink>
                    <NavLink className='flex items-center justify-center w-8 h-8 border rounded-full border-gray-500 hover:bg-zinc-100 transition duration-300'>
                      <MdOutlineLocalPostOffice />
                    </NavLink>
                    <NavLink className='flex items-center justify-center w-8 h-8 border rounded-full border-gray-500 hover:bg-zinc-100 transition duration-300'>
                      <MdOutlineOtherHouses />
                    </NavLink>
                  </div>
                </span>
              </span>
            </span>
          </div>

          <div className='flex gap-x-12'>

            <div className='py-10 flex flex-col pt-14'>
              <img src={gundem[1].image} className='w-[58rem] h-[33rem]' />

              <div className='flex justify-between w-[52rem] py-2'>
                <div className='font-semibold'>İHA</div>

                <div className='flex gap-x-2'>
                  <div className='text-sm translate-y-1'>Oluşturulma Tarihi: {gundem[1].updateDate}</div>

                  <div className="flex justify-start items-start py-4 flex-shrink-0 -translate-y-1">
                    <span className="w-[0.2rem] h-[0.2rem] bg-gray-500 rounded-full"></span>
                  </div>

                  <div className='border-solid bg-zinc-100 text-sm w-24 h-8 items-center justify-center flex rounded'>2dk okuma</div>
                </div>
              </div>

              <div className='w-[52rem] flex flex-col gap-y-5'>
                <span className='font-semibold text-2xl'>{gundem[1].title}</span>
                <span className='text-lg'>{gundem[1].description}</span>
              </div>

              <div className='py-8 flex gap-x-3'>
                <span className='font-semibold text-xl'>Haberlerle ilgili daha fazlası:</span>

                <span className='relative -translate-y-5'>

                  <span className='flex  gap-x-[1rem] absolute top-3 -left-2'>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="border-solid bg-zinc-200 w-20 h-8 m-2 rounded-full"></div>
                    ))}
                  </span>

                  <span className='flex gap-x-[4rem] absolute top-[1.6rem] left-4'>
                    {hastag && hastag.slice(0, 3).map((hastags, index) => (
                      <NavLink key={index} to='/'>
                        <div className='text-[13px] font-semibold'>
                          {hastags.hastagName}
                        </div>
                      </NavLink>
                    ))}
                  </span>
                </span>
              </div>
            </div>

            <div className='relative py-10 flex flex-col pt-20 gap-y-6'>
              <div className='flex items-center justify-start gap-x-3'>
                <AiFillThunderbolt className='text-red-600 w-[1.5rem] h-[2rem]' />
                <header className='font-extrabold text-xl'>Bakmadan Geçme!</header>
              </div>


              {gundem && gundem.slice(0, 5).map((gundems, index) => (
                <NavLink key={index} to='/'>
                  <img src={gundems.image} className='w-[18rem] h-[11rem] object-cover' />
                  <div className='second flex flex-col border px-2 items-center justify-center'>
                    <span className='w-[16rem] h-[8rem] py-4 font-bold text-lg'>{truncateText(gundems.title, 48)}</span>
                  </div>
                </NavLink>
              ))}

              <div className='absolute flex flex-col gap-y-[19rem] px-5 py-[20rem]'>
                {hastag && hastag.slice(0, 5).map((hastags, index) => (
                  <NavLink key={index} to='/' >
                    <span className='text-red-600 font-bold text-[11px]'>{hastags.hastagName}</span>
                  </NavLink>
                ))}
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}


function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  } else {
    return text;
  }
}