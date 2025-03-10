"use client"

import React from 'react'
import Input from '../Input'
import InputLabel from '../InputLabel'
import TimeSelect from '../TimeSelect'
import PeopleSelect from '../PeopleSelect'
import Button from '../Button'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from '../FormError'
import InputWrapper from '../InputWrapper'
import Image from 'next/image'

export enum TimePeriod {
  AM = "AM",
  PM = "PM"
}

const formSchema = z.object({
  name: z.string().min(1, {message: "Name is required"}),
  email: z.string().email({message: "Must be a valid email address"}),
  date: z.object({
    month: z
      .string()
      .min(1, { message: "Month is required" })
      .max(2, { message: "Month must be a valid number (1-12)" })
      .regex(/^(0?[1-9]|1[0-2])$/, { message: "Must be a valid month (01-12)" }),
    
    day: z
      .string()
      .min(1, { message: "Day is required" })
      .max(2, { message: "Day must be a valid number (1-31)" })
      .regex(/^(0?[1-9]|[12][0-9]|3[01])$/, { message: "Must be a valid day (01-31)" }),

    year: z
      .string()
      .length(4, { message: "Year must be exactly 4 digits" })
      .regex(/^\d{4}$/, { message: "Must be a valid year" }),
  }),
  time: z.object({
    hour: z
      .string()
      .min(1, { message: "Hour is required" })
      .max(2, { message: "Hour must be a valid number (1-12)" })
      .regex(/^(0?[1-9]|1[0-2])$/, { message: "Must be a valid hour (01-12)" }),
    minute: z
      .string()
      .length(2, { message: "Minute must be a valid number (00-59)" })
      .regex(/^([0-5][0-9])$/, { message: "Must be a valid minute (00-59)" }),
    period: z.enum([TimePeriod.AM, TimePeriod.PM]),
  }),
  people: z.number()
})

export default function BookingForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: {
        month: ((new Date()).getMonth() + 1).toString(), //this month
        day: ((new Date()).getDate() + 1).toString(), //next day
        year: (new Date()).getFullYear().toString(),
      },
      time: {
        hour: "09",
        minute: "00",
        period: TimePeriod.AM
      },
      people: 1
    }
  })

  // const form.formState.isSubmitted = form.formState.isSubmitted;

  const dateError =
    form.formState.errors.date?.month?.message ||
    form.formState.errors.date?.day?.message ||
    form.formState.errors.date?.year?.message;
  
  const timeError =
    form.formState.errors.time?.hour?.message ||
    form.formState.errors.time?.minute?.message;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({data})
  }

  return (
    <FormProvider {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='relative h-full min-h-[560px] xl-1440:min-h-[320px] 2xl:max-h-[320px] 2xl:max-w-[1600px] 2xl:mx-auto'>
          <div className='w-full h-full relative'>
            <Image
              src={"/images/patterns/pattern-curve-bottom-right.svg"}
              width={0}
              height={0}
              sizes='100vw'
              className='hidden xl-1440:block w-[70%] h-full 2xl:hidden'
              alt='pattern'
            />
            <Image
              src={"/images/patterns/pattern-lines.svg"}
              width={0}
              height={0}
              sizes='100vw'
              className='hidden xl-1440:block w-auto h-auto absolute bottom-[20%] left-[45%] 2xl:hidden'
              alt='pattern'
            />
          </div>
          <div 
            className={`
              max-w-[540px] xl-1440:mx-[165px] 
              mx-[24px] py-[34px] px-[32px]
              absolute top-[-25%] left-0 right-0 xl-1440:top-[-110%] 2xl:top-[50%]
              shadow-[0_75px_100px_-50px_rgba(56,66,85,50%)] bg-white
              flex flex-col gap-[34px]
              md:place-self-center xl-1440:place-self-end 2xl:place-self-center
            `}
          >
            <InputWrapper>
              <Input
                placeholder='Name'
                {...(form.register("name"))}
              />
              {form.formState.errors.name?.message && (
                <div>
                  <FormError message={form.formState.errors.name.message} />
                </div>
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                placeholder='Email'
                {...(form.register("email"))}
              />
              {(form.formState.errors.email?.message) && (
                <div>
                  <FormError message={form.formState.errors.email.message} />
                </div>
              )}
            </InputWrapper>
            <InputWrapper>
              <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
                <InputLabel label='Pick a date'  className='lg:flex-shrink-0 lg:mr-[60px]'/>
                <div className='flex justify-between items-center gap-3'>
                  <Input
                    placeholder='MM'
                    {...(form.register("date.month"))}
                    className={"lg:w-[100px]"}
                  />
                  <Input
                    placeholder='DD'
                    {...(form.register("date.day"))}
                    className={"lg:w-[100px]"}
                  />
                  <Input
                    placeholder='YYYY'
                    {...(form.register("date.year"))}
                    className={"lg:w-[100px]"}
                  />
                </div>
              </div>
              {dateError && (
                <div>
                  <FormError message={dateError} />
                </div>
              )}
            </InputWrapper>
            <InputWrapper>
              <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
                <InputLabel label='Pick a time' className='lg:flex-shrink-0 lg:mr-[60px]'/>
                <div className='flex justify-between items-center gap-3'>
                  <Input
                    placeholder='09'
                    {...(form.register("time.hour"))}
                    className={"lg:w-[100px]"}

                  />
                  <Input
                    placeholder='00'
                    {...(form.register("time.minute"))}
                    className={"lg:w-[100px]"}

                  />
                  <TimeSelect />
                </div>

              </div>
              {timeError && (
                <div>
                  <FormError message={timeError} />
                </div>
              )}
            </InputWrapper>
            <InputWrapper>
              <PeopleSelect />
              {form.formState.errors.people?.message && (
                <div>
                  <FormError message={form.formState.errors.people.message} />
                </div>
              )}
            </InputWrapper>
            <Button type='submit'>Make Reservation</Button>
          </div>
          </div>
      </form>
    </FormProvider>
  )
}
