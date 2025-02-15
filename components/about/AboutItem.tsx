import React from 'react'

interface AboutItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function AboutItem({children, className, ...props}: AboutItemsProps) {
  return (
    <div className={`mx-6 flex flex-col gap-[48px] text-ebony-clay ${className || ""}`}>
      {children}
    </div>
  )
}
