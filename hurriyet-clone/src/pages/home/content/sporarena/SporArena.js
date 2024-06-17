import React from 'react'
import { useMediaQuery } from "react-responsive";
import BigSporArena from './BigSporArena';
import SmallSporArena from './SmallSporArena';
import MiddleSporArena from './MiddleSporArena';

export default function SporArena() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1580px)' })
    const isMiddleScreen = useMediaQuery({ query: '(max-width: 1579px) and (min-width: 1400px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px) and (min-width: 1050px)' })
    const isXSmallScreen = useMediaQuery({ query: '(max-width: 1049px) and (min-width: 770px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 769px) and (min-width: 0px)' })

    return (
        <>
            {isBigScreen &&
                <BigSporArena />
            }
            {isMiddleScreen &&
                <MiddleSporArena />
            }
            {isSmallScreen &&
                <SmallSporArena />
            }
        </>
    )
}
