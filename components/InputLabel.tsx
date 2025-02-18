import React from 'react'

export default function InputLabel({label, className}: {label: string, className?: string}) {
  return (
    <div className={`text-[20px] leading-[28px] text-cod-gray ${className || ""}`}>
      {label}
    </div>
  )
}
