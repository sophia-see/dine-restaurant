import React from 'react'

export default function ItemContainer({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`flex flex-col justify-center items-center xl:items-start gap-9 md:gap-[39px] md:mx-[58px] xl:max-w-[445px] xl:mx-0 ${className || ""}`}>
      {children}
    </div>
  )
}
