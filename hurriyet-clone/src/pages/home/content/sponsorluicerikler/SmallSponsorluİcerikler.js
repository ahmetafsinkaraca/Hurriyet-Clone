import React from 'react'
import items from '../../../../data/items'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'

export default function SmallSponsorluİcerikler() {
  return (
    <div className='-mt-[10rem] '>

    <div className='flex px-14 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
        Sponsorlu İçerikler
        </header>

        <div className="flex justify-center items-center w-full">
            <div className="w-[36rem] h-2 bg-[#4283EF]"></div>
        </div>

        <div className=''>
            <NavLink to='/hurriyetekstra' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                <button>hurriyet.com.tr/kesfet </button>
                <MdNavigateNext />
            </NavLink>
        </div>
    </div>

    <div className='flex items-start gap-x-4 px-14'>
        {items && items.slice(0, 4).map((item, index) => (
            <NavLink to={items.index}>
                <div>
                    <img src={item.image} className='w-[15rem] h-[12rem]' />
                    <div className='flex flex-col bg-white p-4 w-[15rem] h-[8rem]'>
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
