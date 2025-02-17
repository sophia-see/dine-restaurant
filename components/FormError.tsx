import React from 'react'

export default function FormError({message}: {message: string}) {
  return (
    <div
      className='text-xs text-red-700'
    >
      {message}
    </div>
  )
}
