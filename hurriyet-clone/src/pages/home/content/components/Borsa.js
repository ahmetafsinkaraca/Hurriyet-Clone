import React from 'react'
import borsa from '../../../../data/borsa';
import { useMediaQuery } from 'react-responsive';


export default function GuncelHaberler() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
    const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
    const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

    return (
        <>
            {isBigScreen &&
                <BigBorsa />
            }
            {isMiddleScreen &&
                <MiddleBorsa />
            }
            {isSmallScreen &&
                <SmallBorsa />
            }
            {isXSmallScreen &&
                <XSmallBorsa />
            }
        </>
    )
}

export function BigBorsa() {
    return (
        <section className=' bg-white mx-auto z-10 -translate-y-6'>

            <div className='flex items-center justify-center gap-x-5 py-2'>

                <div className='flex flex-col items-start justify-start'>
                    <p className='font-bold text-md'>{borsa[0].name}</p>
                    <div className='flex'>
                        <p className=' text-black font-semibold'>{borsa[0].count}</p>
                        <div className='border-solid w-10 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[0].percentage}</p></div>
                    </div>
                    <p className=' text-gray-500 font-light text-xs'>{borsa[0].otherCount}</p>
                </div>

               <div className='border-r w-1 h-14'></div>

                <div className='flex flex-col items-start justify-start'>
                    <p className='font-bold text-md'>{borsa[1].name}</p>
                    <div className='flex'>
                        <p className=' text-black font-semibold'>{borsa[1].count}</p>
                        <div className='border-solid w-10 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[1].percentage}</p></div>
                    </div>
                    <p className=' text-gray-500 font-light text-xs'>{borsa[1].otherCount}</p>
                </div>

                <div className='border-r w-1 h-14'></div>

                <div className='flex flex-col items-start justify-start'>
                    <p className='font-bold text-md'>{borsa[2].name}</p>
                    <div className='flex'>
                        <p className='text-black font-semibold' >{borsa[2].count}</p>
                        <div className='border-solid w-10 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[2].percentage}</p></div>
                    </div>
                    <p className=' text-gray-500 font-light text-xs'>{borsa[2].otherCount}</p>
                </div>

                <div className='border-r w-1 h-14'></div>

                <div className='flex flex-col items-start justify-start'>
                    <p className='font-bold text-md'>{borsa[3].name}</p>
                    <div className='flex'>
                        <p className='text-black font-semibold' >{borsa[3].count}</p>
                        <div className='border-solid w-10 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[3].percentage}</p></div>
                    </div>
                    <p className=' text-gray-500 font-light text-xs'>{borsa[3].otherCount}</p>
                </div>

            </div>
        </section>
    )
}

export function MiddleBorsa() {
    return (
        <section className=' bg-white mx-auto z-10 -translate-y-6'>

        <div className='flex items-center justify-center gap-x-4 py-2'>

            <div className='flex flex-col items-start justify-start'>
                <p className='font-bold text-sm'>{borsa[0].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold text-[0.8rem]'>{borsa[0].count}</p>
                    <div className='border-solid w-8 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[0].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[0].otherCount}</p>
            </div>

           <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start'>
                <p className='font-bold text-sm'>{borsa[1].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold text-[0.8rem]'>{borsa[1].count}</p>
                    <div className='border-solid w-8 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[1].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[1].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start'>
                <p className='font-bold text-sm'>{borsa[2].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-[0.8rem]' >{borsa[2].count}</p>
                    <div className='border-solid w-8 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[2].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[2].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start'>
                <p className='font-bold text-sm'>{borsa[3].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-[0.8rem]' >{borsa[3].count}</p>
                    <div className='border-solid w-8 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[3].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[3].otherCount}</p>
            </div>

        </div>
    </section>
    )
}

export function SmallBorsa() {
    return (
        <section className=' bg-white mx-auto z-10 -translate-y-6'>

        <div className='flex items-center justify-center gap-x-3 py-2'>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-sm'>{borsa[0].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold text-sm'>{borsa[0].count}</p>
                    <div className='border-solid w-8 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-[9px]'>{borsa[0].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[0].otherCount}</p>
            </div>

           <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-sm'>{borsa[1].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold text-sm'>{borsa[1].count}</p>
                    <div className='border-solid w-8 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-[9px]'>{borsa[1].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[1].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-sm'>{borsa[2].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-sm' >{borsa[2].count}</p>
                    <div className='border-solid w-8 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-[9px]'>{borsa[2].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[2].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-sm'>{borsa[3].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-sm' >{borsa[3].count}</p>
                    <div className='border-solid w-8 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-[9px]'>{borsa[3].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[3].otherCount}</p>
            </div>

        </div>
    </section>
    )
}

export function XSmallBorsa() {
    return (
        <section className=' bg-white mx-auto z-10 -translate-y-6'>

        <div className='flex items-center justify-center gap-x-5 py-2'>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-md'>{borsa[0].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold text-sm'>{borsa[0].count}</p>
                    <div className='border-solid w-10 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[0].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[0].otherCount}</p>
            </div>

           <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-md'>{borsa[1].name}</p>
                <div className='flex'>
                    <p className=' text-black font-semibold'>{borsa[1].count}</p>
                    <div className='border-solid w-10 h-5 bg-red-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[1].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[1].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-md'>{borsa[2].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-sm' >{borsa[2].count}</p>
                    <div className='border-solid w-10 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[2].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[2].otherCount}</p>
            </div>

            <div className='border-r w-1 h-14'></div>

            <div className='flex flex-col items-start justify-start gap-x-2'>
                <p className='font-bold text-md'>{borsa[3].name}</p>
                <div className='flex'>
                    <p className='text-black font-semibold text-sm' >{borsa[3].count}</p>
                    <div className='border-solid w-10 h-5 bg-green-600 mx-2 justify-center items-center flex'><p className='text-white font-light text-xs'>{borsa[3].percentage}</p></div>
                </div>
                <p className=' text-gray-500 font-light text-xs'>{borsa[3].otherCount}</p>
            </div>

        </div>
    </section>
    )
}