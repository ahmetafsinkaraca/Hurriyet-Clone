import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md'
import items from '../../../../data/items';

export default function MiddleBigpara() {
  return (
    <div className='-translate-y-[20rem]'>

    <div className='flex gap-x-10'>
        <header className='text-2xl font-extrabold flex-shrink-0'>
            Bigpara
        </header>

        <div className="flex justify-center items-center max-w-full ">
            <div className="w-[40rem] h-2 bg-[#ff8a1b]"></div>
        </div>

        <div className=''>
            <NavLink to='bigpara' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                <button>bigpara.hurriyet.com.tr </button>
                <MdNavigateNext />
            </NavLink>
        </div>
    </div>


    <div className="content flex gap-x-4 pt-8">
        <div className='gap-y-2 h-full '>
            <NavLink to='/' className='w-[60rem]'>
                <div className="">
                    <img src={items[3].image} className="object-cover w-[33.5rem] h-[24rem] rounded-msm flex-shrink-0"></img>
                </div>
                <div className='flex flex-col p-4 bg-white w-[33.5rem] h-[13rem] mb-8'>
                    <span className='font-extrabold text-2xl'>{items[3].title}</span>
                    <span className='text-md pt-4'>{items[3].description}</span>
                    <span className='text-[9px] text-red-600 pt-4 font-bold'>{items[3].hastag}</span>
                </div>
            </NavLink>

            <div className='flex gap-x-8 gap-'>
                <NavLink to='/' className=''>
                    <div className="">
                        <img src={items[3].image} className="object-cover w-[15.5rem] h-[11rem] rounded-md flex-shrink-0"></img>
                    </div>
                    <div className='w-[15.5rem] h-[6rem]  bg-white p-2 flex flex-col gap-y-2'>
                        <span className='font-bold text-[15px]'>{items[1].title}</span>
                        <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                    </div>
                </NavLink>
                <NavLink to='/' className=''>
                    <div className="">
                        <img src={items[2].image} className="object-cover w-[15.5rem] h-[11rem] rounded-md flex-shrink-0"></img>
                    </div>
                    <div className='w-[15.5rem] h-[6rem]  bg-white p-2 flex flex-col gap-y-2'>
                        <span className='font-bold text-[15px]'>{items[1].title}</span>
                        <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                    </div>
                </NavLink>
            </div>
        </div>


        <div className=''>

            <div>
                <NavLink to='/' className=''>
                    <div className="">
                        <img src={items[3].image} className="object-cover w-[15.5rem] h-[11rem] rounded-md flex-shrink-0"></img>
                    </div>
                    <div className='w-[15.5rem] h-[6rem] bg-white p-2 flex flex-col gap-y-2 mb-[1rem]'>
                        <span className='font-bold text-[15px]'>{items[1].title}</span>
                        <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to='/' className=''>
                    <div className="">
                        <img src={items[2].image} className="object-cover w-[15.5rem] h-[11rem] rounded-md flex-shrink-0"></img>
                    </div>
                    <div className='w-[15.5rem] h-[6rem] bg-white p-2 flex flex-col gap-y-2 mb-[1rem]'>
                        <span className='font-bold text-[15px]'>{items[1].title}</span>
                        <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                    </div>
                </NavLink>
            </div>

            <div className='pt-[3rem]'>
                <NavLink to='/' className=''>
                    <div className="">
                        <img src={items[2].image} className="object-cover w-[15.5rem] h-[11rem] rounded-md flex-shrink-0"></img>
                    </div>
                    <div className='w-[15.5rem] h-[6rem] bg-white p-2 flex flex-col gap-y-2'>
                        <span className='font-bold text-[15px]'>{items[1].title}</span>
                        <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
</div>
  )
}
