import React from 'react'

export default function InputWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-2'>
      {children}
    </div>
  )
}
