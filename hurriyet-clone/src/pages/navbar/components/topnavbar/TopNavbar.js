import React from 'react'
import { useMediaQuery } from "react-responsive"
import BigTopNavbar from './BigTopNavbar';
import MobileTopNavbar from './MobileTopNavbar';

export default function TopNavbar() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1050px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1049px)' })
  const Search = useMediaQuery({ query: '(max-width: 1049px)' })

  return (

    <>
      {isBigScreen &&
        <BigTopNavbar />
      }
      {isTabletOrMobile &&
        <MobileTopNavbar />
      }
    </>

  )
}