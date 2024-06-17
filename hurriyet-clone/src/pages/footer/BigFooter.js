import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import footer from '../../data/footer';

export default function BigFooter() {
  return (
      <div className='px-[10rem] flex items-center flex-col '>

        <div className='flex items-center p-4 pt-8 gap-x-40'>
          <div className='flex items-center justify-center gap-x-4'>
            <NavLink>
              <img src='../icons/logo2.png' />
            </NavLink>
            <span className='flex-shrink-0 text-sm '> &copy;Copyright 2024 Hürriyet Gazetecilik ve Matbaacılık A.Ş </span>
          </div>

          <div className='flex gap-x-10 pl-40'>
            <NavLink className='border p-3 rounded-full border-gray-500'>
              <FaFacebookF />
            </NavLink>

            <NavLink className='border p-3 rounded-full border-gray-500'>
              <BsTwitterX />
            </NavLink>

            <NavLink className='border p-3 rounded-full border-gray-500'>
              <TiSocialInstagram />
            </NavLink>

            <NavLink className='border p-3 rounded-full border-gray-500'>
              <FaLinkedinIn />
            </NavLink>

            <NavLink className='border p-3 rounded-full border-gray-500'>
              <FaYoutube />
            </NavLink>

          </div>
        </div>

        <div className="flex justify-center items-center w-full py-2 flex-shrink-0">
          <div className="w-[80rem] h-0.5 bg-gray-400 opacity-30"></div>
        </div>

        <div className='flex gap-x-20 p-2 text-nowrap'>

          <div className='flex flex-col'>
            {footer && footer.slice(0, 9).map((footers, id) => (
              <NavLink key={id} to={`/details/${footers.id}`}>
                <span className='font-bold text-[13px]'>{footers.title}</span>
              </NavLink>
            ))}
          </div>

          <div className='flex flex-col'>

            {footer && footer.slice(9, 18).map((footers, id) => (
              <NavLink key={id} to={`/details/${footers.id}`}>
                <span className='font-bold text-[13px]'>{footers.title}</span>
              </NavLink>
            ))}
          </div>

          <div className='flex flex-col'>
            {footer && footer.slice(0, 9).map((footers, id) => (
              <NavLink key={id} to={`/details/${footers.id}`}>
                <span className='font-bold text-[13px]'>{footers.title}</span>
              </NavLink>
            ))}
          </div>

          <div className='flex flex-col'>
            {footer && footer.slice(9, 18).map((footers, id) => (
              <NavLink key={id} to={`/details/${footers.id}`}>
                <span className='font-bold text-[13px]'>{footers.title}</span>
              </NavLink>
            ))}
          </div>

          <div className='flex flex-col'>
            {footer && footer.slice(0, 9).map((footers, id) => (
              <NavLink  key={id}  to={`/details/${footers.id}`}>
                <span className='font-bold text-[13px]'>{footers.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex justify-start items-start w-full py-4 flex-shrink-0">
          <div className="w-[80rem] h-0.5 bg-gray-400 opacity-30"></div>
        </div>

      <div className='flex flex-col items-start w-[75rem]'>
        <div className='flex gap-x-8 '>
          <NavLink>
            <span className='font-semibold text-sm'>Hürriyet'e Reklam Ver</span>
          </NavLink>
          <NavLink>
            <span className='font-semibold text-sm'>Yatırımcı İlişkileri</span>
          </NavLink>
          <NavLink>
            <span className='font-semibold text-sm'>Bize Ulaşın</span>
          </NavLink>
          <NavLink>
            <span className='font-semibold text-sm'>Hürriyet Kurumsal</span>
          </NavLink>
        </div>

        <div className='pt-4 text-[14px] mb-[3rem]'>
          Türkiye'den ve Dünya’dan son dakika haberleri, köşe yazıları, magazinden siyasete, spordan seyahate bütün konuların tek adresi Hurriyet.com.tr haber içerikleri izin alınmadan, kaynak gösterilerek dahi iktibas edilemez. Kanuna aykırı ve izinsiz olarak kopyalanamaz, başka yerde yayınlanamaz.
        </div>
      </div>

    </div>
  )
}
