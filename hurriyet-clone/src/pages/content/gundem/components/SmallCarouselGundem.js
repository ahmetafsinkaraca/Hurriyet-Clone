import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gundem from '../../../../data/gundem';
import Pagination from '../../../../components/Pagination';

export default function SmallCarouselGundem() {

    const itemsPerPage = 8;
    const itemsPerPageOther = 1;

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [maximumValue, setMaximumValue] = useState(1)

    useEffect(() => {
        let _maximumValue = gundem.length / itemsPerPage
        setMaximumValue(_maximumValue)
    }, [maximumValue])

    //console.log(items.slice(counter * itemsPerPage, (counter * itemsPerPage) + itemsPerPage ))
    useEffect(() => {
        let _items = gundem.slice((page - 1) * itemsPerPage, ((page - 1) * itemsPerPage) + itemsPerPage)
        console.log(_items)
        setItems(_items)
    }, [page])

    return (
        <div className="max-w-screen-lg mx-auto">
            {gundem && gundem.map((gundems, index) => {
                    // İlk itemsPerPageOther slayd için farklı içerik kullan
                    if (index < itemsPerPageOther) {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <NavLink to={`/details/${gundems.index}`} className='flex flex-col'>
                                    <img src={gundems.image} className='w-[40rem] h-[30rem] hover:opacity-70 transition duration-300 rounded' />
                                    <span className='font-bold text-[28px] hover:opacity-70 transition duration-300'>{gundems.title}</span>
                                    <span className='w-[40rem] py-3 hover:opacity-70 transition duration-300'>{gundems.description}</span>
                                    <span className='text-red-600 py-1 font-extrabold text-[9px] hover:opacity-70 transition duration-300'>{gundems.hastag}</span>
                                </NavLink>
                                <div className='w-full flex my-5 pt-5'>
                                    <div className=' bg-gray-500 w-full h-[0.1rem] opacity-30'></div>
                                </div>
                            </div>
                        );
                    } else {
                        // Diğer slaydlar için standart içerik kullan
                        return (
                            <NavLink key={index} to={`/details/${gundems.index}`} className='flex flex-col'>
                                <div className='flex gap-x-5 py-10'>
                                    <img src={gundems.image} className='w-[28rem] h-[15rem] hover:opacity-70 transition duration-300 rounded' />
                                    <div className='flex flex-col'>
                                        <span className='w-[15rem] font-bold text-2xl hover:opacity-70 transition duration-300 line-clamp-3'>{gundems.title}</span>
                                        <span className='w-[15rem] h-[7rem] py-3 hover:opacity-70 transition duration-300 text-[17px] font-light line-clamp-4'>{gundems.description}</span>
                                        <span className='text-red-600 text-[10px] font-extrabold hover:opacity-70 transition duration-300 pt-2'>{gundems.hastag}</span>
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


