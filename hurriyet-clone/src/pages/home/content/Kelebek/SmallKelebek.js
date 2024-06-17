import React from 'react'
import items from '../../../../data/items'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'

export default function SmallKelebek() {
  return (
    <div className='mt-[3rem] '>

      <div className='flex gap-x-6 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
          Kelelebek
        </header>

        <div className="flex justify-center items-center w-full">
          <div className="w-[40rem]  h-2 bg-[#e3000f]"></div>
        </div>

        <div className=''>
          <NavLink to='/kelebek-magazin' className='flex justify-center items-center gap-x-2 flex-shrink-0 text-nowrap'>
            <button>/kelebek-magazin</button>
            <MdNavigateNext />
          </NavLink>
        </div>
      </div>

      <div className="content flex gap-x-4 pt-4">
        <div className='gap-y-2 h-full '>
          <NavLink to='/' className='w-[60rem]'>
            <div className="">
              <img src={items[3].image} className="object-cover w-[42rem] h-[24rem] rounded-msm flex-shrink-0"></img>
            </div>
            <div className='flex flex-col p-4 bg-white w-[42rem] h-[13rem] mb-8'>
              <span className='font-extrabold text-2xl'>{items[3].title}</span>
              <span className='text-md pt-4'>{items[3].description}</span>
              <span className='text-[9px] text-red-600 pt-12 font-bold'>{items[3].hastag}</span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className='flex items-start gap-x-4'>
        {items && items.slice(0, 3).map((item, index) => (
          <NavLink to={items.index} className='mb-4'>
            <div>
              <img src={item.image} className='w-[13.2rem] h-[8rem]' />
              <div className='flex flex-col bg-white p-4 w-[13.2rem] h-[9rem]'>
                <span className='text-[17px] font-bold line-clamp-2'>{item.title}</span>
                <span className='text-[9px] font-bold text-red-600 pt-2 mb-4'>{item.hastag}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className='flex items-start gap-x-4'>
        {items && items.slice(3, 6).map((item, index) => (
          <NavLink to={items.index} className='mb-4'>
            <div>
              <img src={item.image} className='w-[13.2rem] h-[8rem]' />
              <div className='flex flex-col bg-white p-4 w-[13.2rem] h-[9rem]'>
                <span className='text-[17px] font-bold line-clamp-2'>{item.title}</span>
                <span className='text-[9px] font-bold text-red-600 pt-2'>{item.hastag}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
