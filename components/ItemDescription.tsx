import React from 'react'

interface ItemDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function ItemDescription({ text, className, ...props }: ItemDescriptionProps) {
  return (
    <div className={`font-regular text-[16px] leading-[26px] tracking-[0px] ${className || ""}`} {...props}>
      {text}
    </div>
  )
}
