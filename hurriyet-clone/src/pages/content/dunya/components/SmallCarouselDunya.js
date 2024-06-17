import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import dunya from '../../../../data/dunya';
import Pagination from '../../../../components/Pagination';


export default function SmallCarouselDunya() {

    const itemsPerPage = 8;
    const itemsPerPageOther = 1;

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [maximumValue, setMaximumValue] = useState(1)

    useEffect(() => {
        let _maximumValue = dunya.length / itemsPerPage
        setMaximumValue(_maximumValue)
    }, [maximumValue])

    //console.log(items.slice(counter * itemsPerPage, (counter * itemsPerPage) + itemsPerPage ))
    useEffect(() => {
        let _items = dunya.slice((page - 1) * itemsPerPage, ((page - 1) * itemsPerPage) + itemsPerPage)
        console.log(_items)
        setItems(_items)
    }, [page])

    return (
        <div className="max-w-screen-lg mx-auto">
                {dunya && dunya.map((dunyas, index) => {
                    // İlk itemsPerPageOther slayd için farklı içerik kullan
                    if (index < itemsPerPageOther) {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <NavLink to={`/details/${dunyas.index}`} className='flex flex-col'>
                                    <img src={dunyas.image} className='w-[40rem] h-[30rem] hover:opacity-70 transition duration-300 rounded' />
                                    <span className='font-bold text-[28px] hover:opacity-70 transition duration-300'>{dunyas.title}</span>
                                    <span className='w-[40rem] py-3 hover:opacity-70 transition duration-300'>{dunyas.description}</span>
                                    <span className='text-red-600 py-1 font-extrabold text-[9px] hover:opacity-70 transition duration-300'>{dunyas.hastag}</span>
                                </NavLink>
                                <div className='w-full flex my-5 pt-5'>
                                    <div className=' bg-gray-500 w-full h-[0.1rem] opacity-30'></div>
                                </div>
                            </div>
                        );
                    } else {
                        // Diğer slaydlar için standart içerik kullan
                        return (
                            <NavLink key={index} to={`/details/${dunyas.index}`} className='flex flex-col'>
                                <div className='flex gap-x-5 py-10'>
                                    <img src={dunyas.image} className='w-[28rem] h-[15rem] hover:opacity-70 transition duration-300 rounded' />
                                    <div className='flex flex-col'>
                                        <span className='w-[15rem] font-bold text-2xl hover:opacity-70 transition duration-300 line-clamp-3'>{dunyas.title}</span>
                                        <span className='w-[15rem] h-[7rem] py-3 hover:opacity-70 transition duration-300 text-[17px] font-light line-clamp-4'>{dunyas.description}</span>
                                        <span className='text-red-600 text-[10px] font-extrabold hover:opacity-70 transition duration-300 pt-2'>{dunyas.hastag}</span>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    }
                })}
                <Pagination setPage={setPage} page = {page} maximumValue = {maximumValue} itemsPerPage = {itemsPerPage}/>
        </div>
    );
}


/* export function CarouselFunc({
    children: items,
    autoSlide = false,
    autoSlideInterval = 3000,
    itemsPerPage
}) {
    const [curr, setCurr] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const prev = () => {
        const prevIndex = Math.max(curr - itemsPerPage, 0);
        setCurr(prevIndex);
        const dotIndex = Math.floor(prevIndex / itemsPerPage);
        moveDot(dotIndex);
    };

    const next = () => {
        const nextIndex = Math.min(curr + itemsPerPage, items.length - 1);
        setCurr(nextIndex);
        const dotIndex = Math.floor(nextIndex / itemsPerPage);
        moveDot(dotIndex);
    };

    const moveDot = i => {
        const newIndex = i * itemsPerPage;
        if (newIndex >= 0 && newIndex < items.length) {
            setCurr(newIndex);
        }
    }

    return (
        <div className="max-w-screen-lg mx-auto -mt-6">
            <div className='flex flex-col items-center justify-center py-10 gap-x-3'>
                {items.slice(curr, curr + itemsPerPage)}
            </div>
            <div className="flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className={`p-1 translate-x-[16rem] rounded-full text-gray-800 border-opacity-0 border-solid group ${curr === 0 ? 'opacity-50' : ''}`}
                    disabled={curr === 0}
                >
                    <div className='border bg-white p-2 group-hover:bg-red-600'>
                        <MdKeyboardDoubleArrowLeft size={20} className='group-hover:text-white' />
                    </div>
                </button>
                <button
                    onClick={next}
                    className={`p-1 -translate-x-[16rem] rounded-full text-gray-800 border-opacity-0 border-solid group ${curr >= items.length - itemsPerPage ? 'opacity-50' : ''}`}
                    disabled={curr >= items.length - itemsPerPage}
                >
                    <div className='border bg-white p-2 group-hover:bg-red-600'>
                        <MdKeyboardDoubleArrowRight size={20} className='group-hover:text-white' />
                    </div>
                </button>
            </div>

            <div className="flex items-center justify-center gap-2">
                <div className="flex gap-x-8">
                    {[...Array(totalPages)].map((_, i) => {
                        if (totalPages > 2) {
                            if (i === 0) {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => moveDot(i)}
                                        className={`-translate-y-[3.6rem] transition-all duration-300 w-10 h-10 border border-opacity-20 border-black bg-white text-black hover:text-white hover:bg-red-600 flex items-center justify-center rounded ${curr === i * itemsPerPage ? "p-2 text-red-600" : "bg-opacity-50"}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {curr < itemsPerPage ? i + 1 : i + 2}
                                    </div>
                                );
                            } else if (i === 1) {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => moveDot(i)}
                                        className={`-translate-y-[3.6rem] transition-all duration-300 w-10 h-10 border border-opacity-20 border-black bg-white text-black hover:text-white hover:bg-red-600 flex items-center justify-center rounded ${curr === i * itemsPerPage ? "p-2 text-red-600" : "bg-opacity-50"}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {curr < itemsPerPage ? i + 1 : i + 2}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="border border-opacity-20 border-black w-10 h-10 items-center justify-center flex text-black -translate-y-[3.6rem] rounded" key={i}>...</div>
                                );
                            }
                        }
                    })}
                    {totalPages > 1 && (
                        <div
                            onClick={() => moveDot(totalPages - 1)}
                            className={`-translate-y-[3.6rem] transition-all duration-300 w-10 h-10 border border-opacity-20 border-black bg-white text-black hover:text-white hover:bg-red-600 flex items-center justify-center rounded ${curr === (totalPages - 1) * itemsPerPage ? "p-2 text-red-600" : "bg-opacity-50"}`}
                            style={{ cursor: "pointer" }}
                        >
                            {totalPages}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
 */
