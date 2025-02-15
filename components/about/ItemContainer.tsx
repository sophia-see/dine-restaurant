import React from 'react'

export default function ItemContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col justify-center items-center gap-9 md:gap-[39px] md:mx-[58px]">
      {children}
    </div>
  )
}
