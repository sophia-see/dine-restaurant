import React from 'react'
import Image from "next/image"
export default function Logo() {
  return (
    <Image
      src={"/images/logo.svg"}
      width={0}
      height={0}
      sizes="100vw"
      alt="logo of dine"
      className="w-auto h-[32px]"
    />
  )
}
