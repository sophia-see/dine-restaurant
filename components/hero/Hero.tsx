"use client"

import Button from "@/components/Button";
import ItemDescription from "@/components/ItemDescription";
import ItemTitle from "@/components/ItemTitle";
import Image from "next/image";
import Logo from "../Logo";
import { redirect } from "next/navigation";

export default function Hero() {
  const onClickBook = () => {
    redirect("/booking")
  }

  return (
    <section className="relative h-[748px] md:h-[992px] xl:h-[820px]">
      <Image
        src={`/images/homepage/hero-bg-mobile@2x.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="object-cover object-center w-full h-full md:hidden"
      />
      <Image
        src={`/images/homepage/hero-bg-tablet@2x.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="object-cover object-center w-full h-full hidden md:max-xl:block xl:hidden"
      />
      <Image
        src={`/images/homepage/hero-bg-desktop@2x.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="object-cover object-center w-full h-full hidden xl:block"
      />
      <div 
        className={`
          absolute top-[232px] md:top-[374px] xl:top-[65px] left-0 right-0 
          py-4 h-full xl:px-[165px]
          text-white
          flex flex-col items-center xl:items-start
          xl:max-w-[1600px] xl:mx-auto
        `}
      >
        <Logo />
        <div
          className={`
            flex flex-col gap-[21px] justify-center items-center xl:justify-start xl:items-start
            text-center xl:text-start
            px-6 md:px-10 mt-9 xl:px-0 xl:mt-[153px] xl:max-w-[507px]
          `}
        >
          <div>
            <ItemTitle
              title="Exquisite dining"  
              className="font-light xl:text-[80px] xl:leading-[80px] xl:tracking-[-1px]"
            />          
            <ItemTitle
              title="since 1989"  
              className="font-light xl:text-[80px] xl:leading-[80px] xl:tracking-[-1px]"
            />          
          </div>
          <ItemDescription
            text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
            className="md:px-[58px] xl:px-0"
          />
        </div>
        <Button variant="outline" className="w-full max-w-[245px] mt-[53px]" onClick={onClickBook}>Book a table</Button>
      </div>
    </section>
  )
}
