import React from 'react'
import items from '../../../../data/items'
import { NavLink } from 'react-router-dom'

export default function BigResmiİlanlar() {
  return (
      <div className='mt-[2rem] '>

          <div className='flex items-start gap-x-4 px-14'>
              {items && items.slice(0, 4).map((item, index) => (
                  <NavLink to={`${item.id}`} className='mb-4'>
                      <div>
                          <img src={item.image} className='w-[18rem] h-[14rem]' />
                          <span className='absolute -translate-y-20 translate-x-20 bg-red-900 text-white text-[22px] font-extrabold tracking-wide rounded-lg'>Resmi İlandır</span>
                          <div className='flex flex-col bg-white p-4 w-[18rem] h-[8rem]'>
                              <span className='text-[17px] font-bold line-clamp-2'>{item.title}</span>
                              <span className='text-[9px] font-bold text-red-600 pt-4 mb-4'>{item.hastag}</span>
                          </div>
                      </div>
                  </NavLink>
              ))}
          </div>

      </div>
  )
}
