"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'
import Logo from '../Logo';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import Button from '../Button';

export default function BookingHero() {
  const { currSize } = useDeviceSize();

  return (
    <div>
      <div className='h-[600px] w-full relative'>
        <Image
          src={`/images/booking/hero-bg-${currSize}@2x.jpg`}
          sizes='100vw'
          width={0}
          height={0}
          alt="food background"
          className='w-full h-full brightness-[75%]'
          priority
        />
        <div className='absolute top-[56px] left-0 right-0 px-[24px] flex flex-col items-center text-center text-white'>
          <Logo />
          <div className='mt-[44px] mb-[19px] flex flex-col gap-[13px]'>
            <ItemTitle title='Reservations' />
            <ItemDescription text='We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.' />
          </div>
          <Button variant='outline' className='w-full max-w-[245px]'>Reserve Place</Button>
        </div>
      </div>
    </div>
  )
}
