import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import dunya from '../../../../data/dunya';
import Pagination from '../../../../components/Pagination';


export default function BigCarouselDunya() {

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
                                    <img src={dunyas.image} className='w-[53.5rem] hover:opacity-70 transition duration-300 rounded' />
                                    <span className='font-bold text-[28px] hover:opacity-70 transition duration-300'>{dunyas.title}</span>
                                    <span className='w-[54rem] py-3 hover:opacity-70 transition duration-300'>{dunyas.description}</span>
                                    <span className='text-red-600 py-1 font-extrabold text-[9px] hover:opacity-70 transition duration-300'>{dunyas.hastag}</span>
                                </NavLink>
                                <div className='w-full flex my-5 pt-5'>
                                    <div className=' bg-gray-500 w-full h-[0.1rem] opacity-20'></div>
                                </div>
                            </div>
                        );
                    } else {
                        // Diğer slaydlar için standart içerik kullan
                        return (
                            <NavLink key={index} to={`/details/${dunyas.index}`} className='flex flex-col'>
                                <div className='flex gap-x-5 py-10'>
                                    <img src={dunyas.image} className='w-[30rem] hover:opacity-70 transition duration-300 rounded' />
                                    <div className='flex flex-col'>
                                        <span className='w-[25rem] font-bold text-3xl hover:opacity-70 transition duration-300'>{dunyas.title}</span>
                                        <span className='w-[25rem] py-3 hover:opacity-70 transition duration-300 text-[17px] font-light'>{dunyas.description}</span>
                                        <span className='text-red-600 text-[10px] font-extrabold hover:opacity-70 transition duration-300'>{dunyas.hastag}</span>
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

