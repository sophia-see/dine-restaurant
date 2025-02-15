"use client"

import Image from 'next/image'
import React from 'react'
import ItemTitle from '../ItemTitle'
import Button from '../Button'
import useDeviceSize from '@/hooks/use-device-size'

export default function Action() {
  const {currSize} = useDeviceSize();

  return (
    <div className='relative w-full h-[328px] md:h-[272px] flex justify-center items-center pt-[84px] pb-[80px] text-white'>
      <Image
        src={`/images/homepage/ready-bg-${currSize}.jpg`}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-full absolute inset-0 -z-10'
        alt='food background'
      />
      <div className='px-[41px] flex flex-col gap-5 justify-center items-center text-center'>
        <ItemTitle title='Ready to make a reservation?' className='font-bold' />
        <Button variant='outline' className='w-full md:w-[245px]'>Book a table</Button>
      </div>
    </div>
  )
}
