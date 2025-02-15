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
    images: {
      mobile: "family-gathering-mobile.jpg",
      tablet: "family-gathering-tablet.jpg",
      desktop: "family-gathering-desktop.jpg"
    },
  }, 
  {
    name: "Special Events",
    description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    images: {
      mobile: "special-events-mobile.jpg",
      tablet: "special-events-tablet.jpg",
      desktop: "special-events-desktop.jpg"
    },
  }, 
  {
    name: "Social Events",
    description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    images: {
      mobile: "social-events-mobile.jpg",
      tablet: "social-events-tablet.jpg",
      desktop: "social-events-desktop.jpg"
    },
  },
]

export default function Events() {
  const {currSize} = useDeviceSize();
  const [currentTab, setCurrentTab] = React.useState(EVENTS[0]);

  return (
    <div
      className={`
        flex flex-col items-center
        pt-[80px] pb-[124px] mx-6 md:mx-10 
      `}
    >
      <div className='w-full md:px-[58px]'>
        <Image
          src={`/images/homepage/${currentTab.images[currSize as "mobile" | "desktop"]}`}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)]'
          alt={`image representing ${currentTab.name}`}
        />
      </div>
      <div
        className={`
          w-full
          flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-center justify-center
          mt-[49px] mb-[27px] md:mb-[47px]
        `}
      >
        {EVENTS.map((e) => {
          const isCurrentTab = e.name == currentTab.name;

          return (
            <div key={`${e.name}`} className='flex flex-col items-center' onClick={() => setCurrentTab(e)}>
              <span className={`font-semibold text-[17px] leading-[28px] tracking-[2.5px] text-[#4c4c4c] ${isCurrentTab ? "" : "opacity-50"}`}>
                {e.name.toUpperCase()}
              </span>
              {isCurrentTab && <div className='mt-[7px] h-[1px] w-[48px] bg-beaver'>
              </div>}
            </div>
          )
        })}
      </div>
      <div className='flex flex-col items-center justify-center text-center gap-[13px] md:px-[116px]'>
        <ItemTitle title={currentTab.name} className='font-bold' />
        <ItemDescription text={currentTab.description} />
      </div>
      <Button className='w-[245px] mt-[27px] md:mt-[60px]'>Book a table</Button>
    </div>
  )
}
