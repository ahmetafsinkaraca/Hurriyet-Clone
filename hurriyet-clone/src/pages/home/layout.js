import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Homelayout() {
  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col justify-center flex-wrap text-wrap bg-zinc-100'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}


