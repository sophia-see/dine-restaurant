import React from 'react'

interface ItemDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function ItemDescription({ text, className, ...props }: ItemDescriptionProps) {
  return (
    <div 
      className={`
        font-regular 
        text-[16px] md:text-[20px]
        leading-[26px] md:leading-[30px]
        tracking-[0px] md:tracking-[0px]
        ${className || ""}
      `} 
      {...props}
    >
      {text}
    </div>
  )
}
