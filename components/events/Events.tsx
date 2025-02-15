"use client"

import Image from 'next/image';
import React from 'react'
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import Button from '../Button';
import useDeviceSize from '@/hooks/use-device-size';

const EVENTS = [
  {
    name: "Family Gathering",
    description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    image_prefix: "family-gathering",
    image_suffix: ".jpg",
  }, 
  {
    name: "Special Events",
    description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    image_prefix: "special-events",
    image_suffix: ".jpg",
  }, 
  {
    name: "Social Events",
    description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    image_prefix: "social-events",
    image_suffix: ".jpg",
  },
]

export default function Events() {
  const {currSize} = useDeviceSize();
  const [currentTab, setCurrentTab] = React.useState(EVENTS[0]);

  return (
    <div
      className={`
        flex flex-col items-center xl:flex-row xl:gap-0
        pt-[80px] xl:pt-[160px] pb-[124px] px-6 md:px-10 xl:px-[118px]
        relative 
      `}
    >
      <div className='hidden md:block absolute top-0 left-0 right-1/2 xl:right-[60%]'>
        <Image
          src={"/images/patterns/pattern-curve-top-right.svg"}
          sizes='100vw'
          width={0}
          height={0}
          alt='pattern with curved at the top right'
          className='w-full h-[320px]'
        />
      </div>
      <div className='w-auto md:px-[58px] xl:px-0 flex-grow-0'>
        <div className='w-full h-[400px] md:h-[360px] xl:w-[540px] xl:h-[600px] relative '>
          <Image
            src={`/images/homepage/${currentTab.image_prefix}-${currSize}@2x${currentTab.image_suffix}`}
            sizes='100vw'
            width={0}
            height={0}
            className='w-full h-full  shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)] object-cover object-center'
            alt={`image representing ${currentTab.name}`}
          />
          <div className='hidden md:block absolute top-[-10%] xl:top-[-5%] left-[-10%] xl:left-[-5%]'>
            <Image
              src={"/images/patterns/pattern-lines.svg"}
              sizes='100vw'
              width={0}
              height={0}
              className='w-auto h-auto'
              alt='lines pattern'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center xl:items-start xl:pl-[128px]'>
        <div
          className={`
            w-full
            flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-center justify-center
            xl:flex-col xl:items-start
            mt-[49px] mb-[27px] md:mb-[47px]
            px-2 xl:px-0
            xl:order-last
          `}
        >
          {EVENTS.map((e) => {
            const isCurrentTab = e.name == currentTab.name;

            return (
              <div key={`${e.name}`} className='flex flex-col items-center cursor-pointer relative' onClick={() => setCurrentTab(e)}>
                <div className='absolute hidden xl:block top-1/2 left-0 translate-x-[-100%] '>
                  <div className={`h-[1px] w-[97px] mr-[31px] ${isCurrentTab ? "bg-beaver" : "bg-transparent"}`}>
                  </div>
                </div>
                <span className={`font-semibold text-[17px] leading-[28px] tracking-[2.5px] text-[#4c4c4c] ${isCurrentTab ? "" : "opacity-50"}`}>
                  {e.name.toUpperCase()}
                </span>
                <div className={`mt-[7px] h-[1px] w-[48px] xl:hidden ${isCurrentTab ? "bg-beaver" : "bg-transparent"}`}>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center justify-center text-center xl:items-start xl:justify-start xl:text-start  gap-[13px] md:px-[116px] xl:px-0'>
          <ItemTitle title={currentTab.name} className='font-bold' />
          <ItemDescription text={currentTab.description} />
        </div>
        <Button className='w-[245px] mt-[27px] md:mt-[60px]'>Book a table</Button>
      </div>
    </div>
  )
}
