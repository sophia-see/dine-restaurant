import React from 'react'
import Divider from '../Divider'
import ItemTitle from '../ItemTitle'
import ItemDescription from '../ItemDescription'

export default function HighlightIntro() {
  return (
    <div 
      className={`
        flex flex-col gap-9 items-center justify-center text-center xl:text-start xl:justify-start xl:items-start
        md:px-[64px] xl:px-0
        xl:max-w-[445px]
      `}
    >
      <Divider />
      <div
        className={`
          flex flex-col gap-[13px] items-center justify-center text-center xl:text-start xl:justify-start xl:items-start
          text-white
        `}
      >
        <ItemTitle title='A few highlights from our menu' className='font-bold'/>
        <ItemDescription text='We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.' />
      </div>
    </div>
  )
}
