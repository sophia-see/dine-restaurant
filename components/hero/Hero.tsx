"use client"

import Button from "@/components/Button";
import ItemDescription from "@/components/ItemDescription";
import ItemTitle from "@/components/ItemTitle";
import Image from "next/image";
import Logo from "../Logo";
import useDeviceSize from "@/hooks/use-device-size";

export default function Hero() {
  const { isMobile, isTablet, isDesktop } = useDeviceSize();

  return (
    <section className="relative h-[748px] md:h-[992px]">
      <Image
        src={`/images/homepage/hero-bg-mobile.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="w-full h-full md:hidden"
      />
      <Image
        src={`/images/homepage/hero-bg-tablet.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="w-full h-full hidden md:max-lg:block lg:hidden"
      />
      <Image
        src={`/images/homepage/hero-bg-desktop.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="w-full h-full hidden lg:block"
      />
      {/* <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#181818] brightness-120 z-10">
        
      </div> */}
      <div 
        className={`
          absolute top-[232px] md:top-[374px] left-0 right-0 
          py-4 h-full
          text-white
          flex flex-col items-center
        `}
      >
        <Logo />
        <div
          className={`
            flex flex-col gap-[21px] justify-center items-center 
            text-center 
            px-6 md:px-10 mt-9
          `}
        >
          <div>
            <ItemTitle
              title="Exquisite dining"  
              className="font-light"
            />          
            <ItemTitle
              title="since 1989"  
              className="font-light"
            />          
          </div>
          <ItemDescription
            text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
            className="md:px-[58px]"
          />
        </div>
        <Button variant="outline" className="w-full max-w-[245px] mt-[53px]">Book a table</Button>
      </div>
    </section>
  )
}
