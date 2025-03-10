import React from 'react'
import Logo from '../Logo'

function FooterText({text}:{text: string}) {
  return (
    <div className='uppercase text-[14px] leading-[28px] tracking-[2px]'>
      {text}
    </div>
  )
}

export default function Footer() {
  return (
    <div className='bg-cod-gray text-white'>
      <div className='xl:max-w-[1600px] xl:mx-auto pt-[80px] pb-[78px] flex flex-col md:flex-row md:justify-start md:items-start md:gap-[130px] md:px-10 xl:px-[165px] justify-center items-center gap-[42px] text-center'>
        <Logo />
        <div className='flex flex-col xl:flex-row gap-8 xl:gap-[124px] justify-center items-center text-center md:text-start md:justify-start md:items-start'>
          <div>
            <FooterText text='Marthwaite, Sedbergh' />
            <FooterText text='Cumbria' />
            <FooterText text='+00 44 123 4567' />
          </div>
          <div>
            <FooterText text='Open Times' />
            <FooterText text='MON - FRI: 09:00 AM - 10:00 PM' />
            <FooterText text='SAT - SUN: 09:00 AM - 11:30 PM' />
          </div>
        </div>

      </div>
    </div>
  )
}
