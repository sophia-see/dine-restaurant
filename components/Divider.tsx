import React from 'react'
import Image from "next/image";

export default function Divider() {
  return (
    <Image
      src={"/images/patterns/pattern-divide.svg"}
      sizes="100vw"
      width={0}
      height={0}
      alt="horizontal divider"
      className="w-[71px] h-auto"
    />
  )
}
