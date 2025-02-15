import React from 'react'

interface ItemTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ItemTitle({ title, className, ...props }: ItemTitleProps) {
  return (
    <div 
      className={`
        text-[32px] md:text-[48px]
        leading-[40px] md:leading-[64px]
        tracking-[-0.4px] md:tracking-[-0.6px]
        ${className || ""}
      `} 
      {...props}
    >
      {title}
    </div>
  )
}
