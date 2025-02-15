import React from 'react'
import HighlightIntro from './HighlightIntro'
import HighlightsItems from './HighlightsItems'

export default function Highlights() {
  return (
    <div 
      className={`
        bg-cod-gray text-white 
        pt-[72px] pb-[102px] px-6 md:px-[98px]
        flex flex-col gap-[85px] justify-center items-center text-center
      `}
    >
      <HighlightIntro />
      <HighlightsItems />
    </div>
  )
}
