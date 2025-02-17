import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({className, ...props}: InputProps) {
  return (
    <input
      className={`
        w-full 
        m-0 p-0 pl-[16px] pb-[14px] 
        border-b-[1px] border-[#8e8e8e]
        text-[20px] leading-[28px] text-cod-gray
        outline-none
        ${className || ""}
      `}
      {...props}
    />
  )
}
