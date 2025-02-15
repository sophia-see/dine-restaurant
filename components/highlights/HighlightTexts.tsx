import React from 'react'

export default function HighlightTexts({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-[6px]'>
      {children}
    </div>
  )
}
