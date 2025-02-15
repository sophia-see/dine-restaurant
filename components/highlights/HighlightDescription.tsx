import React from 'react'

export default function HighlightDescription({text}: {text: string}) {
  return (
    <div className='text-[16px] leading-[26px] tracking-[0px]'>
      {text}
    </div>
  )
}
