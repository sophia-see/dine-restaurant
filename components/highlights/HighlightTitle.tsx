import React from 'react'

export default function HighlightTitle({title}: {title: string}) {
  return (
    <div className='font-bold text-[20px] leading-[24px] tracking-[-0.25px]'>
      {title}
    </div>
  )
}
