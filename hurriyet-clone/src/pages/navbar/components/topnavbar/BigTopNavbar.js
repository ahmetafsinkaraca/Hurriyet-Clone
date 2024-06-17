import React from 'react'
import { useState } from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from 'react';

export default function BigTopNavbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggleOpen = () => {
    setOpen3(!open3);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 40) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
  
        // 30px kaydırıldığında kapatma işlemi
        if (window.scrollY > 30) {
          setOpen(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup: Listener'ı kaldır
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className='flex items-center justify-between sticky top-0 bg-red-600 w-full py-1 px-2 z-30'>
  
        <div className='flex'>
          <button onClick={() => setOpen2(true)}><img src="./icons/line.png" className='flex items-center flex-shrink-0' alt="Line" /></button>
          <NavLink to='/'><img src="./icons/logo.png" className='flex items-center flex-shrink-0'></img></NavLink>
        </div>
  
        <nav className='flex items-center justify-center gap-x-5'>
          <NavLink to='gundem'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>GÜNDEM</p>
          </NavLink>
          <NavLink to='dunya'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>DÜNYA</p>
          </NavLink>
          <NavLink to='bigpara'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>BİGPARA</p>
          </NavLink>
          <NavLink to='sporarena'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>SPOR ARENA</p>
          </NavLink>
          <NavLink to='kelebek'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>KELEBEK</p>
          </NavLink>
          <NavLink to='yasam'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>YAŞAM</p>
          </NavLink>
          <NavLink to='yazarlar'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>YAZARLAR</p>
          </NavLink>
          <NavLink to='resmiilanlar'>
            <p className=' hover:text-zinc-200 text-white font-bold transition-transform duration-500 ease-in-out text-[14px]'>RESMİ İLANLAR</p>
          </NavLink>
        </nav>
  
        <div className='flex items-center justify-center gap-x-3 px-2'>
  
          <button onClick={() => setOpen(true)}><CiSearch className='text-white size-6' /></button>
          <IoMdNotificationsOutline className='text-white size-6' />
  
          <div className='flex items-center justify-center gap-x-1 border-solid bg-red-900 px-2 py-1.5 pl-1 '>
            <IoIosLock className='text-white size-5' />
            <p className='text-white font-bold text-sm'>GİRİŞ</p>
          </div>
        </div>

        {open && (
        <div className={`fixed -translate-y-5 w-full`}>
          <div className='absolute translate-y-[3.2rem] w-full h-[50px] bg-zinc-50 z-10'>
            <div className='flex justify-center items-center'>
              <div className='relative bg-white'>
                <div className='flex items-center justify-center border-b border-black'>
                  <CiSearch className='text-black size-6' />
                  <input type='search' placeholder="hurriyet.com.tr'de arayın..." className='w-[23rem] h-10 font-light text-[22px] p-2 outline-none'></input>
                  <div className='border rounded-full p-1 border-black'>
                    <FaArrowRightLong className='border rounded-full' />
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className='fixed right-10 top-2 flex w-10 h-10 items-center justify-center'><LiaTimesSolid size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      )}



        {open2 && (
          <div className='fixed inset-0 bg-opacity-50 transition-transform ease-linear duration-200 h-full w-full'>
            <div className='max-w-md h-screen bg-white'>
  
              <div className='pb-20 h-full overflow-auto scrollbar-none'>
                <div className='mb-5 px-5 border-b '>
  
                  <div className='flex items-center justify-center'>
                    <img className='translate-y-12 translate-x-5 w-[9rem]' src='./icons/logo2.png' />
                    <button onClick={() => setOpen2(false)} className='translate-y-12 translate-x-[7rem] flex w-12 h-12 items-center justify-center'><LiaTimesSolid size={22} /></button>
                  </div>
  
                  <nav className='mt-7'>
                    <div className='flex items-start justify-start flex-col py-10'>
                      <NavLink to='https://www.hurriyet.com.tr/gundem/' className='flex items-center'>
                        <div className='flex items-center px-[3rem]'>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>GÜNDEM</p>
                        </div>
                      </NavLink>
                    </div>
  
                    <div className='flex items-start justify-start flex-col'>
                      <NavLink to='https://www.hurriyet.com.tr/dunya/' className='flex items-center'>
                        <div className='flex items-center px-[3rem]'>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>DÜNYA</p>
                        </div>
                      </NavLink>
                    </div>
  
                    <li className='flex items-start justify-start flex-col py-10'>
                      <div className='px-3'>
                        <NavLink to='/' className='flex items-center'>
                          <div className='flex items-center gap-x-6'>
                          <FaPlus onClick={toggleOpen} className='text-red-600' />
                          <button onClick={toggleOpen} className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>BİGPARA</button>
                          </div>
                        </NavLink>
                      </div>
                      {open3 && (
                        <div className=''>
                          <ul className='flex flex-col px-[5rem]'>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                          </ul>
                        </div>
                      )}
                    </li>
  
                      <li className='flex items-start justify-start flex-col'>
                        <div className='px-3'>
                          <NavLink to='/' className='flex items-center'>
                            <div className='flex items-center gap-x-6'>
                              <FaPlus onClick={toggleOpen} className='text-red-600' />
                              <button onClick={toggleOpen} className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>SPOR ARENA</button>
                            </div>
                          </NavLink>
                        </div>
                        {open3 && (
                          <div className=''>
                            <ul className='flex flex-col px-[5rem]'>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
  
                      <li className='flex items-start justify-start flex-col py-10'>
                        <div className='px-3'>
                          <NavLink to='/' className='flex items-center'>
                            <div className='flex items-center gap-x-6'>
                              <FaPlus onClick={toggleOpen} className='text-red-600' />
                              <button onClick={toggleOpen} className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>KELEBEK</button>
                            </div>
                          </NavLink>
                        </div>
                        {open3 && (
                          <div className=''>
                            <ul className='flex flex-col px-[5rem]'>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
  
                      <li className='flex items-start justify-start flex-col'>
                        <div className='px-3'>
                          <NavLink to='/' className='flex items-center'>
                            <div className='flex items-center gap-x-6'>
                              <FaPlus onClick={toggleOpen} className='text-red-600' />
                              <button onClick={toggleOpen} className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>YAŞAM</button>
                            </div>
                          </NavLink>
                        </div>
                        {open3 && (
                          <div className=''>
                            <ul className='flex flex-col px-[5rem]'>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
  
                      <div className='flex items-start justify-start flex-col py-10'>
                      <NavLink to='https://www.hurriyet.com.tr/yazarlar/' className='flex items-center'>
                        <div className='flex items-center px-[3rem]'>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>YAZARLAR</p>
                        </div>
                      </NavLink>
                    </div>
  
                    <div className='flex items-start justify-start flex-col'>
                      <NavLink to='https://www.hurriyet.com.tr/resmi-ilanlar/' className='flex items-center'>
                        <div className='flex items-center px-[3rem]'>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>RESMİ iLANLAR</p>
                        </div>
                      </NavLink>
                    </div>
                   
                    <div className='flex items-start justify-start flex-col py-10'>
                      <NavLink to='https://www.hurriyet.com.tr/astroloji/' className='flex items-center'>
                        <div className='flex items-center px-[3rem]'>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>ASTROLOJİ</p>
                        </div>
                      </NavLink>
                    </div>
  
                    <li className='flex items-start justify-start flex-col'>
                      <div className='px-3'>
                        <NavLink to='/' className='flex items-center'>
                          <div className='flex items-center gap-x-6'>
                            <FaPlus onClick={toggleOpen} className='text-red-600' />
                            <button onClick={toggleOpen} className='font-semibold flex items-center justify-start flex-shrink-0 text-[22px] hover:text-gray-500'>TÜMÜ</button>
                          </div>
                        </NavLink>
                      </div>
                      {open3 && (
                        <div className=''>
                          <ul className='flex flex-col px-[5rem]'>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Dünya</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Gündem</NavLink>
                            <NavLink to='https://www.hurriyet.com.tr/dunya/' className='py-2.5 font-bold hover:text-gray-500'>Spor</NavLink>
                          </ul>
                        </div>
                      )}
                    </li>
  
                    <div className='flex items-start justify-start flex-col py-12'>
                      <NavLink to='https://www.hurriyet.com.tr/astroloji/' className='flex items-center'>
                        <div className='flex items-center px-4 gap-x-7 group'>
                          <SlEnvolopeLetter className='group-hover:text-gray-500'/>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[16px] group-hover:text-gray-500'>E-bültenler</p>
                        </div>
                      </NavLink>
                    </div>
  
                    <div className='flex items-start justify-start flex-col py-2'>
                      <NavLink to='https://www.hurriyet.com.tr/astroloji/' className='flex items-center'>
                        <div className='flex items-center px-4 gap-x-7 group'>
                        <LuNewspaper className='group-hover:text-gray-500'/>
                          <p className='font-semibold flex items-center justify-start flex-shrink-0 text-[16px] group-hover:text-gray-500'>Günlük Egazete</p>
                        </div>
                      </NavLink>
                    </div>
                  </nav>

                  <div className='flex gap-x-8 items-center justify-start pt-24'>
                    <div className='flex gap-x-10 '>
                      <NavLink className='border p-3 rounded-full border-gray-500'>
                        <FaFacebookF />
                      </NavLink>

                      <NavLink className='border p-3 rounded-full border-gray-500'>
                        <BsTwitterX />
                      </NavLink>

                      <NavLink className='border p-3 rounded-full border-gray-500'>
                        <FaLinkedinIn />
                      </NavLink>

                      <NavLink className='border p-3 rounded-full border-gray-500'>
                        <FaYoutube />
                      </NavLink>

                      <NavLink className='border p-3 rounded-full border-gray-500'>
                        <TiSocialInstagram />
                      </NavLink>
                    </div>
                  </div>

                  <div className='flex py-3 px-4 pt-16'>
                  <span className='flex-shrink-0 text-sm '> &copy;Copyright 2024 Hürriyet Gazetecilik ve Matbaacılık A.Ş </span>
                  </div>
                  <div className='flex items-center py-3 px-4'>
                    <span className='text-xs leading-loose'><a  href='https://www.hurriyet.com.tr/kullanim-kosullari/' className=' underline'>Kullanım Koşulları</a>, <a href='https://www.hurriyet.com.tr/kisisel-verilerin-korunmasi/' className=' underline'>Gizlilik Politikası</a>,
                    <a  href='https://www.hurriyet.com.tr/bizeulasin/' className=' underline'>İletişim </a> için bu linklerikullanabilirsiniz. Login olduğunuz taktirde kullanım koşullarınıve gizlilik politikasını kabul etmiş olursunuz.</span>
                  </div>
                  <div className='flex items-center py-10 gap-x-2 px-2'>
                    <img src='https://s.hurriyet.com.tr/static/images/redesign/ic-app-store.png?v=octo-20.536.0.1923' className='w-[9rem] h-[3.5rem]'/>
                    <img src='https://s.hurriyet.com.tr/static/images/redesign/ic-google-play.png?v=octo-20.536.0.1923' className='w-[9rem] h-[3.5rem]'/>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        )}
  
      </div>
    )
}
