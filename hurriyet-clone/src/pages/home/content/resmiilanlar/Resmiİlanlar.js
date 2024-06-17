import React from 'react'
import { useMediaQuery } from "react-responsive";
import BigResmiİlanlar from './BigResmiİlanlar';
import MiddleResmiİlanlar from './MiddleResmiİlanlar';
import SmallResmiİlanlar from './SmallResmiİlanlar';

export default function Resmiİlanlar() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
  const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
  const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

  return (
      <>
          {isBigScreen &&
              <BigResmiİlanlar />
          }
          {isMiddleScreen &&
              <MiddleResmiİlanlar />
          }
          {isSmallScreen &&
              <SmallResmiİlanlar />
          }
      </>
  )
}
