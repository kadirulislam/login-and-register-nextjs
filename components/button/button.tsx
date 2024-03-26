"use client"
import Link from 'next/link'
import React, { AnchorHTMLAttributes, MouseEventHandler } from 'react'

const btnBg = true;
type Props = {     
    
        className?: string,
        children: React.ReactNode,
        onclick?: MouseEventHandler<HTMLButtonElement>
} & ( ButtonType | LinkType)

type ButtonType ={
    type: 'button',    
}
type LinkType = {
    type: 'link',
    link?: any,
   
} 



export default function Button(props: Props)
     {
        return (
    (props.type == 'button')?
                <button onClick={props.onclick}                    
                    className={`py-4 mt-3  rounded-md  w-full text-secondary-color font-bold ${props.className && props.className}`}>
                    {props.children}
                </button>    
                :
                <Link
                    href={props.link}
                    className={`py-4 mt-2 bg-black text-white  rounded-md  w-full  flex gap-x-4 items-center  justify-center px-12  tracking-[1px] ${props.className && props.className}`}>
                    {props.children}
                </Link>
        )
    }

        
