import React from 'react'

export default function HighlightTexts({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col md:items-start md:text-start gap-[6px]'>
      {children}
    </div>
  )
}
