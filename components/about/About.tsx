"use client"

import React from 'react'
import Image from "next/image"
import ItemTitle from '../ItemTitle'
import ItemDescription from '../ItemDescription'
import AboutItem from './AboutItem'
import Divider from '../Divider'
import Item from './Item'
import ItemContainer from './ItemContainer'
import useDeviceSize from '@/hooks/use-device-size'

function ImageContainer ({children}: {children:React.ReactNode}) {
  return (
    <div className='xl:flex-shrink-0 relative h-[400px] md:h-[360px] xl:h-[720px] xl:w-[540px]'>
      {children}
    </div>
  )
}

export default function About() {
  const {currSize} = useDeviceSize();

  return (
    <section>
      <div className="relative h-[662px] md:h-[690px]">
        <AboutItem className="absolute top-[-72px] md:top-[-96px] xl:top-[-68px] h-full overflow-visible ">
          <ImageContainer>
            <Image
              src={`/images/homepage/enjoyable-place-${currSize}@2x.jpg`}
              sizes="100vw"
              width={0}
              height={0}
              alt="a place full of nature"
              className="w-full h-full shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)] object-cover object-center"
            />
          </ImageContainer>
          <ItemContainer>
            <Divider />
            <Item>
              <ItemTitle
                title="Enjoyable place for all the family"
                className="font-bold"
              />          
              <ItemDescription
                text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
              />
            </Item>
          </ItemContainer>   
        </AboutItem>
        <div className='hidden md:block absolute top-[50%] right-[50%] left-0 xl:right-[10%] -translate-y-[70%]'>
          <Image
            src={"/images/patterns/pattern-curve-top-right.svg"}
            sizes='100vw'
            width={0}
            height={0}
            alt='pattern with curved at the top right'
            className='w-auto h-[320px]'
          />
        </div>
      </div>
      <AboutItem className='relative h-full pb-[101px] md:pb-[118px] xl:pb-0 xl:mt-[100px] xl:h-[640px] xl:overflow-visible'>
        <ImageContainer>
          <Image
            src={`/images/homepage/locally-sourced-${currSize}@2x.jpg`}
            sizes="100vw"
            width={0}
            height={0}
            alt="a freshly cooked food"
            className="w-full h-full shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)] xl:shadow-none object-cover object-center"
          />
          <div className='hidden md:block absolute top-[70%] xl:top-[40%] right-[-10%]'>
            <Image
              src={"/images/patterns/pattern-lines.svg"}
              sizes='100vw'
              width={0}
              height={0}
              className='w-auto h-auto xl:z-10'
              alt='lines pattern'
            />
          </div>
        </ImageContainer>
        <ItemContainer className='xl:order-first'>
          <Divider />
          <Item>
            <ItemTitle
              title="The most locally sourced food"  
              className="font-bold"
            />          
            <ItemDescription
              text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            />
          </Item>
        </ItemContainer>
        <div className='hidden md:block absolute bottom-0 -right-[67%] xl:right-[0px] overflow-hidden'>
          <Image
            src={"/images/patterns/pattern-curve-top-left.svg"}
            sizes='100vw'
            width={0}
            height={0}
            alt='pattern with curved at the top right'
            className='w-auto h-[320px]'
          />
        </div>
      </AboutItem> 
    </section>
  )
}
