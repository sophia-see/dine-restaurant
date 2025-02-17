"use client"

import Image from 'next/image'
import React from 'react'
import ItemTitle from '../ItemTitle'
import Button from '../Button'
import useDeviceSize from '@/hooks/use-device-size'
import { redirect } from 'next/navigation'

export default function Action() {
  const {currSize} = useDeviceSize();

  const onClickBook = () => {
    redirect("/booking")
  }

  return (
    <div className='relative w-full h-[328px] md:h-[272px] xl:h-[240px] flex justify-center items-center pt-[84px] pb-[80px] text-white'>
      <Image
        src={`/images/homepage/ready-bg-${currSize}@2x.jpg`}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-full absolute inset-0 -z-10'
        alt='food background'
      />
      <div className='w-full px-[41px] md:px-[66px] xl:px-[165px] flex flex-col xl:flex-row gap-5 justify-center xl:justify-between items-center text-center xl:text-start'>
        <ItemTitle title='Ready to make a reservation?' className='font-bold' />
        <Button variant='outline' className='w-full md:w-[245px]' onClick={onClickBook}>Book a table</Button>
      </div>
    </div>
  )
}
