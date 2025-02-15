import React from 'react'

export default function Item({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col justify-center items-center gap-[13px] text-center">
      {children}
    </div>
  )
}
