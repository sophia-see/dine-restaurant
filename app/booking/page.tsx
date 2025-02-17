"use client"

import React from 'react'
import BookingHero from '@/components/booking-hero/BookingHero'
import BookingForm from '@/components/booking-form/BookingForm'

export default function BookingPage() {

  return (
    <div 
      className={`
        h-full min-h-screen w-full min-w-screen
      `}
    >
      <BookingHero />
      <BookingForm />
    </div>
  )
}
