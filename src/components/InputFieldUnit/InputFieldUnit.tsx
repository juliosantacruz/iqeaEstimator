import React, { useState } from "react";
import "./InputFieldUnit.scss";

type InputProps = {
  className?: string;
  name: string;
  label: string;
  type: string;
  isRequired?: boolean;
  value?: string | number;
  dirtyFields?:any
  register: any;
};

const selectedUnits = ["m³/d", "m³/h", "lts/hr", "GPD", "GPH"];

export default function InputFieldUnit({
  className,
  name,
  label,
  type,
  isRequired,
  value,
  dirtyFields,
  register,
}: InputProps) {

  const [hasValue, setHasValue]= useState(false)


  const handleChange =(event:any)=>{
    event.preventDefault()
    // console.log(hasValue)
    setHasValue(true)
  }


  return (
    <div className="InputFieldUnit">
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
        onChange={(event)=>handleChange(event)}
        {...register(name, {
          setValueAs:(value:any)=>{
            if(value){
              setHasValue(true)
            }else{
              setHasValue(false)
            }
          }
        })}
      />
      <select {...register(`${name}-unit`)}>
        {selectedUnits.map((unit) => {
          return (
            <option key={unit} value={unit}>
              {unit}
            </option>
          );
        })}
      </select>
    </div>
  );
}
