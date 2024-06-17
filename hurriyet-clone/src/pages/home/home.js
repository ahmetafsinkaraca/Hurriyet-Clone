import React from 'react'
import SıcakGundem from './content/sıcakgundem/SıcakGundem'
import GozdenKacmasın from './content/gozdenkacmasın/GozdenKacmasın'
import Bigpara from './content/bigpara/Bigpara'
import Sponsorluİcerikler from './content/sponsorluicerikler/Sponsorluİcerikler'
import SporArena from './content/sporarena/SporArena'
import Kelebek from './content/Kelebek/Kelebek'
import Yasam from './content/yasam/Yasam'
import Astroloji from './content/astroloji/Astroloji'
import Resmiİlanlar from './content/resmiilanlar/Resmiİlanlar'
import Yazarlar from './content/yazarlar/Yazarlar'

export default function Home() {
  return (
    <div className='flex items-center flex-col justify-center flex-wrap text-wrap bg-zinc-100'>
       <SıcakGundem/>
       <GozdenKacmasın/>
       <Bigpara/>
       <Sponsorluİcerikler/>
       <SporArena/>
       <Kelebek/>
       <Yasam/>
       <Astroloji/>
       <Resmiİlanlar/>
       <Yazarlar/>
    </div>
  )
}
