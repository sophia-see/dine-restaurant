import Button from "@/components/Button";
import ItemDescription from "@/components/ItemDescription";
import ItemTitle from "@/components/ItemTitle";
import Image from "next/image";
import Logo from "../Logo";

export default function Hero() {
  return (
    <section className="relative h-[748px]">
      <Image
        src={"/images/homepage/hero-bg-mobile.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="shrimp pasta in a plate"
        className="w-full h-full"
      />
      <div 
        className={`
          absolute top-[232px] left-0 right-0 
          text-white
          flex flex-col items-center justify-center
        `}
      >
        <Logo />
        <div
          className={`
            flex flex-col gap-[21px] justify-center items-center 
            text-center 
            px-6 mt-9
          `}
        >
          <ItemTitle
            title="Exquisite dining since 1989"  
          />          
          <ItemDescription
            text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
          />
        </div>
        <Button variant="outline" className="w-full max-w-[245px] mt-[53px]">Book a table</Button>
      </div>
    </section>
  )
}
