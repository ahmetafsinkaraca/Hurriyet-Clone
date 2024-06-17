import React from 'react'
import items from '../../../../data/items'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'

export default function MiddleSporArena() {
  return (
    <div className='mt-[3rem] '>

    <div className='flex px-14 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
        Sporarena
        </header>

        <div className="flex justify-center items-center w-full">
            <div className="w-[42rem]  h-2 bg-[#f6cb01]"></div>
        </div>

        <div className=''>
            <NavLink to='sporarena' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                <button>hurriyet.com.tr/sporarena </button>
                <MdNavigateNext />
            </NavLink>
        </div>
    </div>

    <div className='flex items-start gap-x-4 px-14'>
        {items && items.slice(0, 4).map((item, index) => (
            <NavLink to={items.index} className='mb-4'>
                <div>
                    <img src={item.image} className='w-[16rem] h-[14rem]' />
                    <div className='flex flex-col bg-white p-3 w-[16rem] h-[7rem]'>
                        <span className='text-[15px] font-bold line-clamp-2'>{item.title}</span>
                        <span className='text-[9px] font-bold text-red-600 pt-4 mb-4'>{item.hastag}</span>
                    </div>
                </div>
            </NavLink>
        ))}
    </div>
    <div className='flex items-start gap-x-4 px-14'>
        {items && items.slice(4, 9).map((item, index) => (
            <NavLink to={items.index} className='mb-4'>
                <div>
                    <img src={item.image} className='w-[16rem] h-[14rem]' />
                    <div className='flex flex-col bg-white p-3 w-[16rem] h-[7rem]'>
                        <span className='text-[15px] font-bold line-clamp-2'>{item.title}</span>
                        <span className='text-[9px] font-bold text-red-600 pt-4'>{item.hastag}</span>
                    </div>
                </div>
            </NavLink>
        ))}
    </div>

</div>
  )
}
