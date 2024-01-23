import React, { useState } from "react";
import "./InputField.scss";
import { useForm } from "react-hook-form";

type InputProps = {
  className?: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;

  inputChange?: any;
  register: any;
};

export default function InputField({
  className,
  name,
  label,
  type,
  required,

  inputChange,
  register,
}: InputProps) {

  const [hasValue, setHasValue]= useState(false)


  return (
    <div className="InputField">
      <label
        htmlFor={`${name}-input`}
        className={`label ${hasValue ? "has-value" : ""}`}
      >
        {label}
      </label>
      <input
        id={`${name}-input`}
        type={type}
        className="input"
        required={required}
        {...register(name, {
          validate:(value:any)=>{
            if(value){
              setHasValue(true)
            }else{
              setHasValue(false)
            }
          }
        })}
      />
    </div>
  );
}
