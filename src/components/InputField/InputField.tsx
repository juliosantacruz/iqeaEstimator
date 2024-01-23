import React from "react";
import './InputField.scss'
import {useForm} from 'react-hook-form'

type InputProps = {
  className?: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  value?: string|number;
  inputChange?:any;
  register:any
};

export default function InputField({
  className,
  name,
  label,
  type,
  required,
  value,
  inputChange,
  register
}: InputProps) {

  const {getValues }=useForm()

  // const value = getValues(name)

  console.log(value)
  return (
    <div className='InputField'>
      <label htmlFor={`${name}-input`} className={`label ${value ? "has-value" : ""}`}>
        {label}
      </label>
      <input
        id={`${name}-input`}
        type={type}
        className="input"

        required={required}
        {... register(name)}
      />
    </div>
  );
};
