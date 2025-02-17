"use client"

import React from "react";
import { useFormContext } from "react-hook-form";


export default function PeopleSelect() {
  const form = useFormContext();

  return (
    <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#8e8e8e]">
      <button 
        className="px-5 text-[#9E7F66] font-bold text-[20px] leading-[24px] tracking-[-0.25px] disabled:text-gray-200"
        onClick={() => {
          if (form.getValues("people") > 1)
          form.setValue("people", form.getValues("people") - 1)
        }}
        disabled={form.getValues("people") <= 1}
        type="button"
      >
        -
      </button>
      <div className="font-bold text-[20px] leading-[24px] tracking-[-0.25px] text-[#151515]">
        {form.watch("people")} people
      </div>
      <button 
        className="px-5 text-[#9E7F66] font-bold text-[20px] leading-[24px] tracking-[-0.25px]"
        onClick={() => form.setValue("people", form.getValues("people") + 1)}
        type="button"
      >
        +
      </button>
    </div>
  );
}
