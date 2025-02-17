import React from "react";
import { useFormContext } from "react-hook-form";
import { TimePeriod } from "./booking-form/BookingForm";


export default function TimeSelect() {
  const form = useFormContext();

  return (
    <div className="relative w-fit">
      <select
        className="
          border-b border-[#8e8e8e] 
          m-0 p-0 pl-[16px] pb-[14px] 
          outline-none bg-transparent
          text-[20px] leading-[28px] text-cod-gray 
          appearance-none pr-6
        "
        {...form.register("time.period")}
      >
        <option value={TimePeriod.AM}>AM</option>
        <option value={TimePeriod.PM}>PM</option>
      </select>
      <svg
        className="absolute right-0 bottom-[16px] w-4 h-4 text-[#9E7F66] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
