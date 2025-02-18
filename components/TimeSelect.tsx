"use client"

import React from "react";
import { useFormContext } from "react-hook-form";
import { TimePeriod } from "./booking-form/BookingForm";


export default function TimeSelect() {
  const form = useFormContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateTimePeriod = (value: string) => {
    form.setValue("time.period", value);
  }

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      <button
        className="
          lg:w-[100px]
          border-b border-[#8e8e8e] 
          m-0 p-0 pl-[16px] pb-[14px]
          outline-none bg-transparent
          text-[20px] leading-[28px] text-cod-gray 
          appearance-none pr-6
          cursor-pointer
          peer
        "
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {form.getValues("time.period")}
      </button>
      {isOpen && (
        <div className="py-[18px] pl-4 pr-[30px] absolute right-0 bottom-0 translate-y-full w-auto bg-white shadow-[0_15px_25px_0px_rgba(56,66,85,50%)]">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => updateTimePeriod(TimePeriod.AM)}>
              <svg className={`${form.watch("time.period") != TimePeriod.AM ? "stroke-transparent" : "stroke-[#9E7F66]"}`} xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" strokeWidth="2" d="M1 5.897l2.767 2.767L11.432 1"/></svg>
            <span className="text-[20px] leading-[28px] text-cod-gray">AM</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => updateTimePeriod(TimePeriod.PM)}>
            <svg className={`${form.watch("time.period") != TimePeriod.PM ? "stroke-transparent" : "stroke-[#9E7F66]"}`} xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" strokeWidth="2" d="M1 5.897l2.767 2.767L11.432 1"/></svg>
            <span className="text-[20px] leading-[28px] text-cod-gray">PM</span>
          </div>
        </div>
      )}
      <svg
        className="absolute right-0 top-1 w-4 h-4 text-[#9E7F66] pointer-events-none"
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
