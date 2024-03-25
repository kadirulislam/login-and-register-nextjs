import React, { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from 'react'

export default function FormInput({
    type,
    className,
    placeholder,
    onchange,
    onclick,
    
}: {
    type: HTMLInputTypeAttribute,
    className?: string,
    placeholder?: string,
        onchange?: ChangeEventHandler<HTMLInputElement> | undefined,
        onclick?:MouseEventHandler<HTMLInputElement>  | undefined
    
    
}) {
  return (
      <input
          type={type}
          onChange={onchange}
          onClick={onclick}
          placeholder={placeholder}
          className={`py-2 px-3 rounded-md  w-full border-[1px] my-1 text-lg  ${className && className}`}
         
      />
  )
}
