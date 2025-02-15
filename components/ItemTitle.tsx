import React from 'react'

interface ItemTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ItemTitle({ title, className, ...props }: ItemTitleProps) {
  return (
    <div className={`font-light text-[32px] leading-[40px] tracking-[-0.4px] ${className || ""}`} {...props}>
      {title}
    </div>
  )
}
