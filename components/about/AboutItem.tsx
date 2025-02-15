import React from 'react'

interface AboutItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function AboutItem({children, className, ...props}: AboutItemsProps) {
  return (
    <div className={`overflow-hidden px-6 md:px-[98px] flex flex-col gap-[48px] md:gap-[56px] text-ebony-clay ${className || ""}`}>
      {children}
    </div>
  )
}
