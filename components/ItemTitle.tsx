import React from 'react'

interface ItemTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ItemTitle({ title, className, ...props }: ItemTitleProps) {
  return (
    <div 
      className={`
        text-[32px] md:text-[48px] lg:text-[80px]
        leading-[40px] md:leading-[64px] lg:leading-[80px]
        tracking-[-0.4px] md:tracking-[-0.6px] lg:tracking-[-1px]
        ${className || ""}
      `} 
      {...props}
    >
      {title}
    </div>
  )
}
