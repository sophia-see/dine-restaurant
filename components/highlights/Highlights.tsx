import React from 'react'
import HighlightIntro from './HighlightIntro'
import HighlightsItems from './HighlightsItems'

export default function Highlights() {
  return (
    <div 
      className={`
        bg-cod-gray text-white
      `}
    >
      <div 
        className={`
          xl:max-w-[1600px] xl:mx-auto
          pt-[72px] xl:pt-[200px] pb-[102px] px-6 md:px-[98px] xl:px-[165px]
          flex flex-col xl:flex-row gap-[85px] 
          justify-center items-center text-center xl:justify-start xl:items-start xl:text-start
        `}
      >
        <HighlightIntro />
        <HighlightsItems />

      </div>
    </div>
  )
}
