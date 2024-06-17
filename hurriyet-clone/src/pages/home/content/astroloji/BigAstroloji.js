import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'
import horoscope from '../../../../data/horoscope'

export default function BigAstroloji() {
  return (
    <div className='mt-[1rem] '>

      <div className='flex gap-x-6 py-6'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
          Astroloji
        </header>

        <div className="flex justify-center items-center w-full">
          <div className="w-[52rem] h-2 bg-[#220b57]"></div>
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
            <NavLink to={`/detail/${horoscopes.id}`} className='group transition-transform duration-500'>
              <div className='group-hover:bg-[#220b57] bg-white w-[18rem] h-[7rem] flex flex-col justify-center items-center basis-auto'>
                <img className='group-hover:bg-white' src={horoscopes.image} />
                <span className='group-hover:text-white text-[#220b57] mt-4'>{horoscopes.title}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div className='flex gap-x-4 mt-4'>
          {horoscope && horoscope.slice(4, 8).map((horoscopes, id) => (
            <NavLink to={`/detail/${horoscopes.id}`} className='group'>
              <div className='group-hover:bg-[#220b57] bg-white w-[18rem] h-[7rem] flex flex-col justify-center items-center basis-auto'>
                <img className='group-hover:bg-white' src={horoscopes.image} />
                <span className='group-hover:text-white text-[#220b57] mt-4'>{horoscopes.title}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div className='flex gap-x-4 mt-4'>
          {horoscope && horoscope.slice(8, 12).map((horoscopes, id) => (
            <NavLink to={`/detail/${horoscopes.id}`} className='group'>
              <div className='group-hover:bg-[#220b57] bg-white w-[18rem] h-[7rem] flex flex-col justify-center items-center basis-auto'>
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
