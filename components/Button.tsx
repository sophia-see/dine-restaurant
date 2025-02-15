"use client"

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = "py-6 flex justify-center uppercase font-semibold text-[17px] leading-[16px] tracking-[2.5px] transition duration-200";
  
  const variantStyles = {
    default: "bg-cod-gray text-white hover:border hover:border-cod-gray hover:text-cod-gray hover:bg-transparent",
    outline: "border border-white text-white hover:bg-white hover:text-mirage",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
