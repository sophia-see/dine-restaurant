import React from 'react'

export default function InputWrapper({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`flex flex-col gap-2 ${className || ""}`}>
      {children}
    </div>
  )
}
