import Image from 'next/image'
import React from 'react'
import ItemTitle from '../ItemTitle'
import Button from '../Button'

export default function Action() {
  return (
    <div className='relative w-full h-[328px] flex justify-center items-center pt-[84px] pb-[80px] px-6 text-white'>
      <Image
        src={"/images/homepage/ready-bg-mobile.jpg"}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-full absolute inset-0 -z-10'
        alt='food background'
      />
      <div className='px-[41px] flex flex-col gap-5 justify-center items-center text-center'>
        <ItemTitle title='Ready to make a reservation?' className='font-bold' />
        <Button variant='outline' className='w-full'>Book a table</Button>
      </div>
    </div>
  )
}
