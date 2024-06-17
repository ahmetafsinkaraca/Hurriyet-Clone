import React from 'react'

export default function LoadingCard() {
    return (
        <div className='flex items-center flex-col justify-center flex-wrap text-wrap bg-white w-full h-full'>
            <div className='flex justify-center text-wrap gap-x-[3.5rem]'>

                <div className='flex flex-col pt-8'>
                <header className='bg-gray-300 animate-pulse w-[45rem] p-4'>
              </header>
  
                    <div className='flex gap-x-12'>

                        <div className='py-10 flex flex-col pt-8'>
                            <div  className='w-[58rem] h-[33rem] bg-gray-300 animate-pulse' />

                            <div className='w-[52rem] flex flex-col gap-y-3'>
                                <span className='font-semibold text-2xl w-[52rem] p-4 bg-gray-300 animate-pulse my-5'></span>
                                <span className='text-lg  w-[50rem] p-4 bg-gray-300 animate-pulse'></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Loader = () => {
    const loadPages = [1];
    return (
        <div className="grid grid-cols-1">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}