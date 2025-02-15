import React from 'react'

export default function Item({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start gap-[13px] text-center xl:text-start">
      {children}
    </div>
  )
}
