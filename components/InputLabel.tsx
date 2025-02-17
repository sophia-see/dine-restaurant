import React from 'react'

export default function InputLabel({label}: {label: string}) {
  return (
    <div className='text-[20px] leading-[28px] text-cod-gray'>
      {label}
    </div>
  )
}
