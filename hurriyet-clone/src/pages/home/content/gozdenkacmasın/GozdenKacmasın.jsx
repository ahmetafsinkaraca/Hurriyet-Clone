import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import items from '../../../../data/items';
import { useMediaQuery } from "react-responsive";


export default function SıcakGundem() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
    const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
    const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

    return (
        <>
            {isBigScreen &&
                <BigGozdenKacmasın />
            }
            {isMiddleScreen &&
                <MiddleGozdenKacmasın />
            }
            {isSmallScreen &&
                <SmallGozdenKacmasın />
            }
            {isXSmallScreen &&
                <XSmallGozdenKacmasın />
            }
        </>
    )
}

export function BigGozdenKacmasın() {
    return (

        <div className='mb-10'>

            <div className='flex gap-x-10'>
                <header className='text-2xl font-extrabold flex-shrink-0'>
                    Gözden Kaçmasın
                </header>

                <div className="flex justify-center items-center max-w-full ">
                    <div className="w-[51rem] h-2 bg-[#f40]"></div>
                </div>

                <div className=''>
                    <NavLink to='/hurriyetekstra' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                        <button>hurriyetekstra </button>
                        <MdNavigateNext />
                    </NavLink>
                </div>
            </div>

            <div className="content flex items-start gap-x-2 pt-8">
                <div className='gap-y-2 h-full flex  items-start bg-red-300'>
                    <NavLink to='/' className='flex w-[55rem]'>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[90rem] h-[18rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='flex flex-col p-4 bg-white'>
                            <span className='font-extrabold text-3xl'>{items[3].title}</span>
                            <span className='text-md pt-4'>{items[3].description}</span>
                            <span className='text-xs text-red-600 pt-4'>{items[3].hastag}</span>
                        </div>
                    </NavLink>
                </div>

                <div className='w-full h-full flex'>
                    <div className=' bg-green-500 ml-auto w-full min-h-[40rem] text-center flex items-center justify-center text-zinc-50'>
                        REKLAM VEREBILIRSINIZ
                    </div>
                </div>
                
            </div>

            <div className="grid grid-col gap-y-2 h-full items-start justify-start -translate-y-[21rem]">
                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='/' className='flex'>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[12rem] h-[10rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[15rem] h-[10rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[12rem] h-[10rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[15rem] h-[10rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
                <div className="flex gap-x-4 -mb-4 py-5">
                    <NavLink to='/' className='flex'>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[12rem] h-[10rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[15rem] h-[10rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[12rem] h-[10rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[15rem] h-[10rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="grid grid-col gap-y-2 pt-3 h-full items-center justify-center w-3/4 -translate-y-[21rem]">
                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[18rem] h-[13rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[18rem] h-[13rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>


            <div className="grid grid-col gap-y-2 pt-10 h-full items-start justify-start -translate-y-[21rem]">

                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='gudem' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gudem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gudem' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gudem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[18rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[17px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>

                <div className="grid grid-col gap-y-2 pt-6 h-full items-center justify-center">
                    <div className="flex gap-x-4 -mb-4">
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[1].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[18rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[17px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[2].image} className="object-cover w-[18rem] h-[15rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[18rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[17px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>

    )
}

export function MiddleGozdenKacmasın() {
    return (
        <div className='mt-16'>

            <div className='flex gap-x-10'>
                <header className='text-2xl font-extrabold flex-shrink-0'>
                    Gözden Kaçmasın
                </header>

                <div className="flex justify-center items-center max-w-full">
                    <div className="w-[40rem] h-2 bg-[#f40]"></div>
                </div>

                <div className=''>
                    <NavLink to='/hurriyetekstra' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                        <button>hurriyetekstra </button>
                        <MdNavigateNext />
                    </NavLink>
                </div>
            </div>

            <div className="content flex items-start gap-x-4 pt-4">
                <div className='gap-y-2 h-full flex  items-start bg-red-300'>
                    <NavLink to='/' className='flex w-[48rem]'>
                        <div className="">
                            <img src={items[3].image} className="object-cover max-w-[22rem] h-[14.5rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='flex flex-col p-4 bg-white w-[26rem]'>
                            <span className='font-bold text-2xl'>{items[3].title}</span>
                            <span className='text-md pt-4'>{items[3].title}</span>
                            <span className='text-[9px] text-red-600 pt-4 font-bold'>{items[3].hastag}</span>
                        </div>
                    </NavLink>
                </div>
                <div className='w-full h-full flex px-2'>
                    <div className=' bg-green-500 ml-auto w-full min-h-[40rem] text-center flex items-center justify-center text-zinc-50'>
                        REKLAM VEREBILIRSINIZ
                    </div>
                </div>

            </div>
            

            <div className="grid grid-col gap-y-2 pt-8 h-full items-start justify-start -translate-y-[26rem]">

                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[10rem] h-[9rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[9rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[10rem] h-[9rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[9rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
                <div className="flex gap-x-4 -mb-4 py-5">
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[10rem]  h-[9rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[9rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[10rem]  h-[9rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[9rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="grid grid-col gap-y-2 pt-3 h-full items-center justify-center -translate-y-[26rem] w-3/4">
                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[16rem] h-[12rem]  rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>


            <div className="grid grid-col gap-y-2 pt-10 h-full items-start justify-start -translate-y-[26rem]">

                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='resmiilanlar' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[16rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>

                <div className="grid grid-col gap-y-2 pt-6 h-full items-center justify-center">
                    <div className="flex gap-x-4 -mb-4">
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[1].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[16rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[15px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[2].image} className="object-cover w-[16rem] h-[12rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[16rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[15px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function SmallGozdenKacmasın() {
    return (
        <div className='mt-16'>

            <div className='flex px-14'>
                <header className='text-2xl font-extrabold flex-shrink-0'>
                    Gözden Kaçmasın
                </header>

                <div className="flex justify-center items-center w-full">
                    <div className="w-[35rem] h-2 bg-[#f40]"></div>
                </div>

                <div className=''>
                    <NavLink to='/hurriyetekstra' className='flex justify-center items-center gap-x-2 flex-shrink-0'>
                        <button>hurriyetekstra </button>
                        <MdNavigateNext />
                    </NavLink>
                </div>
            </div>

            <div className="content flex items-start px-14 ">
            <div className='grid grid-col gap-y-2 pt-8 h-full items-start justify-start'>
                <NavLink to='/' className='flex w-[40rem] '>
                    <div className="">
                        <img src={items[3].image} className="object-cover max-w-[18rem] h-[14.5rem] rounded-lg flex-shrink-0"></img>
                    </div>
                    <div className='flex flex-col p-4 bg-white w-[35rem]'>
                        <span className='font-bold text-2xl'>{items[3].title}</span>
                        <span className='text-md pt-4'>{items[3].title}</span>
                        <span className='text-[9px] text-red-600 pt-4 font-bold'>{items[3].hastag}</span>
                    </div>
                </NavLink>
            </div>
            <div className='w-full h-full flex pt-6'>
                    <div className=' bg-green-500 ml-auto w-[300px] min-h-[30rem] text-center flex items-center justify-center text-zinc-50'>
                        REKLAM VEREBILIRSINIZ
                    </div>
                </div>
            </div>


            <div className="grid grid-col gap-y-2 pt-8 h-full items-start justify-start -translate-y-[16rem] px-[3.75rem] ">

                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[8.8rem] h-[7rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[10rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[8.8rem] h-[7rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[10rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
                <div className="flex gap-x-4 -mb-4 py-5">
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[8.8rem] h-[7rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[10rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='gap-x-2 flex'>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[8.8rem] h-[7rem] rounded-lg flex-shrink-0"></img>
                        </div>
                        <div className='w-[10rem] h-[7rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-sm'>{items[1].title}</span>
                            <span className='text-xs text-red-600'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="grid grid-col gap-y-2 pt-3 h-full items-center pl-[8rem] -translate-y-[16rem]">
                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[13rem] h-[9.5rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='dunya' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[13rem] h-[9.5rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[13rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>
            </div>


            <div className="grid grid-col gap-y-2 pt-10 h-full items-start justify-start -translate-y-[16rem] px-12">

                <div className="flex gap-x-4 -mb-4">
                    <NavLink to='resmiilanlar' className=''>
                        <div className="">
                            <img src={items[1].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[14rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[14rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[3].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[14rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                    <NavLink to='gundem' className=''>
                        <div className="">
                            <img src={items[2].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                        </div>
                        <div className='w-[14rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                            <span className='font-bold text-[15px]'>{items[1].title}</span>
                            <span className='text-[9px] text-red-600 font-bold'>{items[1].hastag}</span>
                        </div>
                    </NavLink>
                </div>

                <div className="grid grid-col gap-y-2 pt-6 h-full items-center justify-center">
                    <div className="flex gap-x-4 -mb-4">
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[1].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[14rem] h-[8rem] bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[15px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                        <NavLink to='/' className=''>
                            <div className="">
                                <img src={items[2].image} className="object-cover w-[14rem] h-[11rem] rounded-md flex-shrink-0"></img>
                            </div>
                            <div className='w-[14rem] h-[8rem]  bg-white p-4 flex flex-col gap-y-2'>
                                <span className='font-bold text-[15px]'>{items[1].title}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function XSmallGozdenKacmasın() {
    return (
        <div>

        </div>
    )
}