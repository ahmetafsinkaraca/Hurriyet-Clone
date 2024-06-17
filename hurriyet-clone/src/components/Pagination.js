import { RiArrowRightDoubleFill } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import React, {useState} from 'react'
import { NavLink } from "react-router-dom";


export default function Pagination(props) {

    const  { items, itemsPerPage, setPage, page, maximumValue , ...others} =props

    const [counter, setCounter] = useState(0);

    //console.log("page: ", page)
    let prev = page - 1
    let next = page + 1
    //console.log(page, maximumValue, itemsPerPage)


    function handleChange() {
        setPage(maximumValue - 3);
        setCounter(maximumValue - 2); // Özel düğmenin değerini değiştir

  }



    return (
        <div className="flex gap-4">
            <button className="rounded-md text-gray-800 group"  onClick={() => setPage(page == 1 ? '' : prev)} disabled={page === 1}>
                <div className="border border-opacity-100 bg-white p-4 group-hover:bg-red-600"><RiArrowLeftDoubleFill className='group-hover:text-white' />
                </div>
            </button>

            <button className="rounded-md text-gray-800 group" onChange={() => setCounter(handleChange)} onClick={() => setPage(page > 1 ? page - 1 : page)}>
                <NavLink className={({ isActive }) => isActive ? "bg-white text-red-500 border items-center justify-center flex w-[3rem] h-[3.1rem]" : "border border-opacity-100 bg-white items-center justify-center flex w-[3rem] h-[3.1rem] group-hover:bg-red-600"}>{page}
                </NavLink>
            </button>

            <button className="rounded-md text-gray-800 group"  onClick={() => setPage(maximumValue > page + 3 ? page + 1 : page)}>
            <NavLink className={({ isActive }) => isActive ? "border border-opacity-100 bg-white items-center justify-center flex w-[3rem] h-[3.1rem] group-hover:bg-red-600" : "bg-white text-red-500 border items-center justify-center flex w-[3rem] h-[3.1rem]"}>{page + 1}
                </NavLink>
            </button>

            <button
                className="rounded-md text-gray-800 group"
                onChange={handleChange}
                disabled={counter == maximumValue - 1 ? '...' :  maximumValue - 1}
                >
                <div className="border border-opacity-100 bg-white items-center justify-center flex w-[3rem] h-[3.1rem] group-hover:bg-red-600">
                    {counter == maximumValue - 1 ? maximumValue - 1 : '...' }
                </div>
            </button>

            <button className="rounded-md text-gray-800 group" onClick={() => setCounter(handleChange)}>
                <div className="border border-opacity-100 bg-white items-center justify-center flex w-[3rem] h-[3.1rem] group-hover:bg-red-600">{maximumValue}
                </div>
            </button>

            <button className="rounded-md text-gray-800 group" disabled={page > maximumValue - 4} onClick={() => setPage(page == maximumValue ? page : next)}>
                <div className="border bg-white p-4 group-hover:bg-red-600"><RiArrowRightDoubleFill className='group-hover:text-white' />
                </div>
            </button>
        </div>
    )
}