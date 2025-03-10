import React from 'react'

interface AboutItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function AboutItem({children, className}: AboutItemsProps) {
  return (
    <div className={`overflow-hidden px-6 md:px-[98px] xl:px-[165px] flex flex-col xl:flex-row xl:justify-between gap-[48px] md:gap-[56px] text-ebony-clay ${className || ""}`}>
      {children}
    </div>
  )
}
