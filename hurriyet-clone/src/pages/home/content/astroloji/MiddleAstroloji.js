import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'
import horoscope from '../../../../data/horoscope'

export default function MiddleAstroloji() {
  return (
    <div className='mt-[1rem] '>

      <div className='flex gap-x-6 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
          Astroloji
        </header>

        <div className="flex justify-center items-center w-full">
          <div className="w-[44rem] h-2 bg-[#220b57]"></div>
        </div>

        <div className=''>
          <NavLink to='yasam' className='flex justify-center items-center gap-x-2 flex-shrink-0 text-nowrap'>
            <button>hurriyet.com.tr/astroloji </button>
            <MdNavigateNext />
          </NavLink>
        </div>
      </div>

      <section className=''>

        <div className='flex gap-x-4'>
          {horoscope && horoscope.slice(0, 4).map((horoscopes, id) => (
            <NavLink to={`/detail/${horoscopes.id}`} className='group'>
              <div className='bg-white w-[15rem] h-[6rem] group-hover:bg-[#220b57] flex flex-col justify-center items-center'>
                <img className='group-hover:bg-white' src={horoscopes.image} />
                <span className='group-hover:text-white text-[#220b57] mt-4'>{horoscopes.title}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div className='flex gap-x-4 mt-4'>
          {horoscope && horoscope.slice(4, 8).map((horoscopes, id) => (
            <NavLink to={`/detail/${horoscopes.id}`} className='group'>
              <div className='bg-white w-[15rem] h-[6rem] group-hover:bg-[#220b57] flex flex-col justify-center items-center'>
                <img className='group-hover:bg-white' src={horoscopes.image} />
                <span className='group-hover:text-white text-[#220b57] mt-4'>{horoscopes.title}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div className='flex gap-x-4 mt-4'>
          {horoscope && horoscope.slice(8, 12).map((horoscopes, id) => (
            <NavLink to={`/detail/${horoscopes.id}`} className='group'>
              <div className='bg-white w-[15rem] h-[6rem] group-hover:bg-[#220b57] flex flex-col justify-center items-center'>
                <img className='group-hover:bg-white' src={horoscopes.image} />
                <span className='group-hover:text-white text-[#220b57] mt-4'>{horoscopes.title}</span>
              </div>
            </NavLink>
          ))}
        </div>

      </section>


    </div>
  )
}