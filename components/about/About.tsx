import React from 'react'
import Image from "next/image"
import ItemTitle from '../ItemTitle'
import ItemDescription from '../ItemDescription'
import AboutItem from './AboutItem'
import Divider from '../Divider'
import Item from './Item'
import ItemContainer from './ItemContainer'

export default function About() {
  return (
    <section className='pb-[101px]'>
      <div className="relative h-[662px]">
        <AboutItem className="absolute top-[-72px]">
          <Image
            src={"/images/homepage/enjoyable-place-mobile.jpg"}
            sizes="100vw"
            width={0}
            height={0}
            alt="a place full of nature"
            className="w-full h-[400px] shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)]"
          />
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
      </div>
      <AboutItem>
        <Image
          src={"/images/homepage/locally-sourced-mobile.jpg"}
          sizes="100vw"
          width={0}
          height={0}
          alt="a freshly cooked food"
          className="w-full h-[400px] shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)]"
        />
        <ItemContainer>
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
      </AboutItem> 
    </section>
  )
}
